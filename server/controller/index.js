const axios = require("axios");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const models = require("../database/models");

module.exports = {
  searchCountry: (req, res) => {
    const name = req.params.name;
    axios
      .get(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((result) => {
        res.send(result.data);
      })
      .catch((error) => {
        if (error.response) {
          res.send({
            message: "No Matches Found",
          });
        }
      });
  },
  createUser: async (req, res) => {
    const body = req.body;
    const saltRounds = 10;
    const salt = genSaltSync(saltRounds);
    body.password = hashSync(body.password, salt);

    try {
      const post = await models.User.create(body);
      return res.status(201).json({
        post,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  login: (req, res) => {
    models.User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (!user) {
        return res.status(404).send({ message: "Invalid email or password" });
      }

      let passwordIsValid = compareSync(req.body.password, user.password);

      if (passwordIsValid) {
        passwordIsValid.password = undefined;
        const jsontoken = sign({ result: user }, process.env.JWT_KEY, {
          expiresIn: "1h",
        });

        return res.status(200).json({
          user: user.name,
          token: jsontoken,
        });
      } else {
        return res.status(404).json({
          message: "Invalid email or password",
        });
      }
    });
  },
};
