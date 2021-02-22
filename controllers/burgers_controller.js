const router = require("express").Router();
const burger = require("../models/burger");


router.get("/", function(req, res){
    burger.selectAll(function(burgerData) {
        res.render("index", {burgers:burgerData})
    });
});





module.exports = router;