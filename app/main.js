"use strict"

require("dotenv").config();

const express = require("express");
const app = express();
const config = require("./src/config/appConfig");

config(app);

app.get("/", (req, res) => {
    res.render("login_screen");
})

app.use((req, res) =>{
    res.send("404 NOT FOUND ERROR");
})

app.listen(app.get("port"), () => {
    console.log("Application is listening on port " + app.get("port") + ", press CTR + C to terminate the listening.");
});