const mongoose = require("mongoose");

const ManagementSchema = new mongoose.Schema({}, { timestamps: true });

const Management = mongoose.model("Management", ManagementSchema);

module.exports = Management;
