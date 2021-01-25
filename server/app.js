const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", routes);

app.listen(8080, () => {
  console.log("server is up and running on port", 8080);
});
