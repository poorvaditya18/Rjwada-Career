const DevelopmentService = require("../services/development-services");
const mongoose = require("mongoose");
const developmentService = new DevelopmentService();

const create = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);

    const Resume = { ...req.file };
    const data = { ...req.body, Resume };
    console.log(data);
    // var file = fs.readFileSync(data.Resume.path);
    // var encode_img = file.toString("base64");
    // var final_img = {
    //   contentType: data.Resume.mimetype,
    //   file: new Buffer(encode_img, "base64"),
    // };

    // data = { ...data, Resume: final_img };
    // console.log(data);
    // console.log(final_img);

    const response = await developmentService.create(data);
    // console.log(response);
    return res.status(201).json({
      success: true,
      message: "Successfully created User",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: true,
      message: "Not able to create user",
      data: {},
      err: error,
    });
  }
};

module.exports = { create };
