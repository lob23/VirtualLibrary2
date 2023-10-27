const express = require("express");
const path = require("path");
const hbs = require("express-handlebars").create({defaultLayout: "main"});

const config = (app) => {
    // console.log(path.join("./app", "views"));
    app.engine("handlebars", hbs.engine);
    app.set("views", path.join("./src", "views"));
    app.set("view engine", "handlebars");
    app.set("port", 3000|process.env.PORT);
    app.use(express.static(path.join("./src", "public")));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
};

module.exports = config;