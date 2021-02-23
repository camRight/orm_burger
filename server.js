
const express = require("express");
const handlebars = require("express-handlebars");
// const mySQL = require("mysql");

const app = express();

const port = process.env.PORT || 3003;

const path = require("path")

app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({ extended: true }));

const controller = require("./controllers/burgers_controller");

// how to link to server
// server links to controller, contyroller links to models, models links to ORM's, orm links to connection
app.use(controller);

// expHNDLBRS
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.listen(port, function () {
    console.log("app is listening on PORT" + port)
});

