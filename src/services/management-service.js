const ManagementRepository = require("../repository/management-repository");

class DevelopmentService {
  constructor() {
    this.managementRepository = new ManagementRepository();
  }

  async create(data) {
    try {
      const user = await this.managementRepository.create(data);
      return user;
    } catch (error) {
      console.log("Something went Wrong in Service Layer");
      console.log(error);
    }
  }
  async getUser(data) {
    try {
      const user = await this.managementRepository.getByFilter(data);
      return user;
    } catch (error) {
      console.log("Something went Wrong in Service Layer");
      console.log(error);
    }
  }
}

module.exports = DevelopmentService;
