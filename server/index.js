require("dotenv").config();
const express = require("express");
const app = express();
const config = require("config");
const cors = require("cors");

app.use(cors());

//setting up routes
require("./route/route")(app);

app.listen(config.app.port, () => {
  console.log(
    `sever is running on ${process.env.NODE_ENV} on port: ${config.app.port}`
  );
});
