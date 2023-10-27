"use strict"

require("dotenv").config();

const express = require("express");
const app = express();
const config = require("./config/appConfig");
const loginRouter = require("./src/routes/loginRouter");
const signupRouter = require("./src/routes/signupRouter");

config(app);

app.use("/login", loginRouter);

app.use("/signup", signupRouter);

app.use((req, res) =>{
    res.send("404 NOT FOUND ERROR");
});

app.listen(app.get("port"), () => {
    console.log("Application is listening on port " + app.get("port") + ", press CTR + C to terminate the listening.");
});