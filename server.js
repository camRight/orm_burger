
const express = require("express");
const handlebars = require("express-handlebars");


const app = express();

const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const controller = require("./controllers/burgers_controller");

// how to link to serve:
// server links to controller, controller links to models, models links to ORM's, orm links to connection
app.use(controller);

// expHNDLBRS
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.listen(PORT, function () {
    console.log("App is listening on http://localhost:" + PORT)
});

// it's a boomerange effect between controller, model, ORM... ORM gets resuslt of mysql and brings it back to model and 
// controller and controller puts it into the view