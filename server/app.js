const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const routes = require("./routes");
const { sequelize } = require("./database/models");

const app = express();

app.use(cors());

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 30, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again after a minute",
});

app.use(limiter);

app.use(express.json());

app.use("/", routes);

sequelize.sync().then(() => {
  app.listen(8080, () => {
    console.log("server is up and running on port", 8080);
  });
});
