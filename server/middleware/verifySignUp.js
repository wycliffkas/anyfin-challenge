const models = require("../database/models");

module.exports = {
  checkDuplicateEmail: (req, res, next) => {
    models.User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        res.status(400).json({
          message: "Failed! Email is already in use!",
        });
        return;
      }
      next();
    });
  },
};
