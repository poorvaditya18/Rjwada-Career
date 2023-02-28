const DevelopmentRepository = require("../repository/development-repository");

class DevelopmentService {
  constructor() {
    this.developmentRepository = new DevelopmentRepository();
  }

  //create
  async create(data) {
    try {
      const user = await this.developmentRepository.create(data);
      return user;
    } catch (error) {
      console.log("Something went Wrong in Service Layer");
      console.log(error);
    }
  }

  //get users based on filter
  async getFilterUser(data) {
    try {
      const user = await this.developmentRepository.getByFilter(data);
      return user;
    } catch (error) {
      console.log("Something went Wrong in Service Layer");
      console.log(error);
    }
  }

  //update user
  async updateUser(userId, data) {
    try {
      const user = await this.developmentRepository.update(userId, data);
      return user;
    } catch (error) {
      console.log("Something went Wrong in Service Layer");
      console.log(error);
    }
  }
}

module.exports = DevelopmentService;
