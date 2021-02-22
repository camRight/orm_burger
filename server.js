const orm = require("./config/orm")
const connection = require("./config/connection")
const express = require("express");
const handlebars = require("express-handlebars");
// const mySQL = require("mysql");

const app = express();

const port = process.env.PORT || 3003;

const db = require("./models");



app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));


// expHNDLBRS
app.engine("handlebars", handlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");



app.listen(port, function() {
    console.log("app is listening on PORT" +port)
});

