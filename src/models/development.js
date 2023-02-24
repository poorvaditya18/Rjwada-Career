const mongoose = require("mongoose");

const DevelopmentSchema = new mongoose.Schema({
    
}, { timestamps: true });

const Development = mongoose.model("Development", DevelopmentSchema);

module.exports = Development;
