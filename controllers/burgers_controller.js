const router = require("express").Router();
const burger = require("../models/burger");


router.get("/", function (req, res) {
    burger.selectAll(function (burgerData) {
        res.render("index", { burgers: burgerData })
    });
});

router.post("/", function (req, res) {
    console.log(req.body)

    // {burger_name.... is the burgerObject}
    burger.insertOne({ burger_name: req.body.burger_name, devoured: false }, function (appendBurger) {

        // does a get request
        res.redirect("/")
    })
})

router.put("/:id", function (req, res) {
    burger.updateOne({
        id: req.params.id
    }, {
        devoured: true
    }, function (burgerData) {
        res.json(burgerData)
    })
})



module.exports = router;