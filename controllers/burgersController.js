// Import express
var express = require("express");

var router = express.Router();

// Import burger.js
var burger = require("../models/burger.js");

// Create routes and set up logic within those routes where required
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    burger.create(["burger_name"], [req.body.name], function (data) {
        res.redirect("/");
    });
});

router.post("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({ devoured: req.body.devoured }, condition, function (burger) {
        console.log(burger)
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router; 