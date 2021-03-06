// import express package
var express = require("express");
// import bodyparser package
var bodyParser = require("body-parser");

// set up port
var PORT = process.env.PORT || 8080;

// start instance of express function
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Static directory to be served - sets the public folder to static and express will not manage it
app.use(express.static('public'));

// require handlebars
var exphbs = require("express-handlebars");

// set main.handlebars as the default layout for html pages to follow
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import the 3 routes written in the burgers_controller.js
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start server
app.listen(PORT, function() {
    console.log("Server listening on:  http://localhost:" + PORT);

});