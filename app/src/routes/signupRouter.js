const express = require("express");
const route = express.Router();
const signupController = require("../controllers/signupController");

route.get("/", signupController.getSignupScreen);

route.post("/", signupController.postNewUserAccount);

module.exports = route;