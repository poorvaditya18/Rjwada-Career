const express = require("express");
const developmentController = require("../controllers/development-controller");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "../../uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });

// var upload = multer({ storage: storage });
// const upload = multer({ dest: "../../uploads" });

const router = express.Router();

router.post(
  "/development",
  upload.single("Resume"),
  developmentController.create
);

module.exports = router;
