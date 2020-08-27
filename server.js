var express = require("express");
var app = express();
var exphbs = require("express-handlebars");
var bodyParser = require ("body-parser");
var PORT = process.env.PORT || 3036;


// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "all-burgers" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgersController.js");

app.use(routes);

// Start our server
app.listen(PORT, function(){
  console.log("Server listening on: http://localhost:" + PORT);
});

