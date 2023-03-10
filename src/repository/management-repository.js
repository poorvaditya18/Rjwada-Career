const Management = require("../models/management");

class ManagementRepository {
  //filter
  #createFilter(data) {
    let filter = {};

    // based on position -> ["fullTime","Intern"]
    if (data.Position) {
      filter.Position = data.Position;
    }
    if (data.JobProfile) {
      filter.JobProfile = data.JobProfile;
    }
    if (data.JobId) {
      filter.JobId = data.JobId;
    }
    if (data.Location) {
      filter.Location = data.Location;
    }
    // console.log(filter);
    return filter;
  }

  // create user
  async create(data) {
    try {
      const user = await Management.create(data);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  //get user by userid
  async getById(userId) {
    try {
      const user = await Management.findById(userId);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  //get user by useremail
  async getByEmail(userEmail) {
    try {
      const user = await Management.find({ EmailId: userEmail });
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  //get user based on Filter
  async getByFilter(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const user = await Management.find(filterObject);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ManagementRepository;
