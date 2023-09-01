const express = require("express");
const sendEmail = require("../controllers/emailController");

const router = express.Router();

router.route("/submit").post(sendEmail);

module.exports = router;
