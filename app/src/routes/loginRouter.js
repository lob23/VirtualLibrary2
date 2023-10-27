const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");

router.get("/", loginController.getLoginScreen);

router.post("/", loginController.checkLoginAccount);

module.exports = router;