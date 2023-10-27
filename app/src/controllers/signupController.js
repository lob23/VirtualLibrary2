const userDB = require("../models/userAccountModel");

const getSignupScreen = (req, res) => {
    res.render("signup_screen");
}

const postNewUserAccount = (req, res) => {
    // console.log(req.body);

    const newUser = {
        userEmail: req.body.userEmail,
        userPassword: req.body.userPassword
    }
    const result = userDB.addUserAccount(newUser);

    if (result != {}) res.render("home_screen");
    else res.send("signup failed. Try again!");
};

module.exports = {
    getSignupScreen,
    postNewUserAccount
};