const express = require("express");
const bodyParser = require("body-parser");
const connect = require("./config/database");
const { PORT } = require("./config/serverConfig");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, async () => {
  console.log(`Server Started on Port ${PORT}`);
  await connect();
  console.log("MongoDB connected");
});
