const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect("mongodb://localhost/Rjwada_Career");
};

module.exports = connect;
