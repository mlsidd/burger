// Import Express, burger.js (model)
var express = require("express");

// Create the router for the app
var router = express.Router();

// Import burger model 
var burger = require("../models/burger.js");

// Set up all routes

// Route to display all burgers in db
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var burgObj = {
            burgers: data
        }; // this is the object sent to handlebars
        console.log(burgObj);
        res.render("index", burgObj);
    });
}); // end of get

// Route to add new burger to db
router.post("/api/burgers", function(req, res) {
    burger.create([
        "burger", "devoured"
    ], [
        req.body.burger, req.body.devoured
    ], function(result) {
        // send id
        res.json({ id: result.insertId });
    });
}); // end of post

// Route to update burger when click devoured
router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne({
        devoured: req.body.devoured
    }, id, function(result) {
        if(result.changedRows == 0) {
            
        }
    })
})






// export the router at the end of your file
module.exports = router;