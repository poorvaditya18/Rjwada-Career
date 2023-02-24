const mongoose = require("mongoose");

const OperationSchema = new mongoose.Schema({}, { timestamps: true });

const Operation = mongoose.model("Operation", OperationSchema);

module.exports = Operation;
