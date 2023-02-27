const mongoose = require("mongoose");

const DevelopmentSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    PhoneNo: {
      type: Number,
      required: true,
    },
    EmailId: {
      type: String,
      required: true,
      unique: true,
    },
    LinkedInProfile: {
      type: String,
      required: true,
      unique: true,
    },
    GitHubProfile: {
      type: String,
      required: true,
      unique: true,
    },

    Position: {
      type: String,
      enum: ["FullTime", "Intern"],
    },
    Location: {
      type: String,
      enum: ["OnSite", "Remote"],
    },
    JobProfile: {
      type: String,
      required: true,
      enum: ["FullStack", "Backend"],
    },
    JobId: {
      type: String,
      required: true,
      enum: ["#FS123", "#BD980"],
    },

    Resume: {
      type: mongoose.Schema.Types.Mixed,
      binData: Buffer,
    },

    CoverLetter: {
      type: String,
      // required: true,
      max: [250, "Cover Letter cannot be more than 250 words"],
    },
  },
  { timestamps: true }
);

const Development = mongoose.model("Development", DevelopmentSchema);

module.exports = Development;
