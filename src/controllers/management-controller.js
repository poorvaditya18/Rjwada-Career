const ManagementService = require("../services/management-service");
const managementService = new ManagementService();

const create = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);

    const Resume = { ...req.file };
    const data = { ...req.body, Resume };
    console.log(data);
    const response = await managementService.create(data);

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
