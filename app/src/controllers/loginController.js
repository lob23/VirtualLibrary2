const userDB = require("../models/userAccountModel");

const getLoginScreen = (req, res) => {
    res.render("login_screen");
};

const checkLoginAccount = async (req, res) => {
    const userInf = await userDB.retrieveUserAccount({"userEmail": req.body.userEmail});
    //console.log(userInf);
    if(userInf != null){
        if(userInf.userPassword == req.body.userPassword){
            res.render("home_screen");
        } else {
            res.send("wrong password");
        }
    } else {
        res.send("Email does not exist.");
    }
} 

module.exports = {
    getLoginScreen,
    checkLoginAccount
};