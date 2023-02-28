const DevelopmentService = require("../services/development-services");

const developmentService = new DevelopmentService();

//create user
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

// get user based on Filter
const getFilterUser = async (req, res) => {
  try {
    const response = await developmentService.getFilterUser(req.query);
    return res.status(201).json({
      success: true,
      message: "Successfully Fetched  User",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: true,
      message: "Not able to Fetch user",
      data: {},
      err: error,
    });
  }
};

//update User
const update = async (req, res) => {
  try {
    console.log(req);
    console.log(req.query.id);
    const response = await developmentService.updateUser(
      req.query.id,
      req.body
    );

    return res.status(201).json({
      success: true,
      message: "Successfully Updated User",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: true,
      message: "Not able to update user",
      data: {},
      err: error,
    });
  }
};

module.exports = { create, getFilterUser, update };
