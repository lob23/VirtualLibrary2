"use strict"

require("dotenv").config();

const express = require("express");
const app = express();

const hbs = require("express-handlebars").create({defaultLayout: "main"});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("port", 3000|process.env.PORT);

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("login_screen");
})

app.use((req, res) =>{
    res.send("404 NOT FOUND ERROR");
})

app.listen(app.get("port"), () => {
    console.log("Application is listening on port " + app.get("port") + ", press CTR + C to terminate the listening.")
});