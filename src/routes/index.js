const express = require("express");
const developmentController = require("../controllers/development-controller");
const managementController = require("../controllers/management-controller");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const router = express.Router();

//development
router.post(
  "/development",
  upload.single("Resume"),
  developmentController.create
);

//getFilterUser
router.get("/development", developmentController.getFilterUser);

//updateUser --> ?
router.patch("/development", developmentController.update);

//management
router.post(
  "/management",
  upload.single("Resume"),
  managementController.create
);

module.exports = router;
