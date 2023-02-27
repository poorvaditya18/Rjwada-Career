const DevelopmentRepository = require("../repository/development-repository");

class DevelopmentService {
  constructor() {
    this.developmentRepository = new DevelopmentRepository();
  }

  async create(data) {
    try {
      const user = await this.developmentRepository.create(data);
      return user;
    } catch (error) {
      console.log("Something went Wrong in Service Layer");
      console.log(error);
    }
  }
  async getUser(data) {
    try {
      const user = await this.developmentRepository.getByFilter(data);
      return user;
    } catch (error) {
      console.log("Something went Wrong in Service Layer");
      console.log(error);
    }
  }
}

module.exports = DevelopmentService;
