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

const getFilterUser = async (req, res) => {
  try {
    const response = await developmentService.getFilterUser(req.query);
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

const updateUser = async (req, res) => {
  try {
    const response = await developmentService.updateUser(
      req.params.id,
      req.body
    );
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

module.exports = { create, getFilterUser, updateUser };
