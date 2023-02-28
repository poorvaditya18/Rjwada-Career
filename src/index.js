const express = require("express");
const bodyParser = require("body-parser");
const connect = require("./config/database");
const { PORT } = require("./config/serverConfig");

const CareerRoutes = require("./routes/index");

const DevelopmentService = require("./services/development-services");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/careers", CareerRoutes);

app.listen(PORT, async () => {
  console.log(`Server Started on Port ${PORT}`);
  await connect();
  console.log("MongoDB connected");

  // let repo = new DevelopmentService();
  // const result = await repo.updateUser("63fca3359f8888327858300d", {
  //   Position: "FullTime",
  // });
  // console.log(result);
  // const result = await repo.getUser({
  //   JobId: "#FS123",
  // });
  // console.log(result);
  //   const user = await repo.create({
  //     FirstName: "aniket",
  //     LastName: "patel",
  //     PhoneNo: "12345",
  //     EmailId: "asll@z.com",
  //     LinkedInProfile: "https://www.linkedin.com/in/aniket",
  //     GitHubProfile: "https://www.github.com/aniket",
  //     Position: "Intern",
  //     Location: "OnSite",
  //     JobProfile: "Backend",
  //     JobId: "#BD980",
  //     CoverLetter: "Hello Everyone I am aniket !!",
  //   });
  //   const user = await repo.getUser({
  //     Position: "Intern",
  //     Location: "OnSite",
  //     JobProfile: "FullStack",
  //     JobId: "#BD980",
  //   });
  //   console.log(user);
});
