var express = require("express");
var app = express();
var exphbs = require("express-handlebars");
var bodyParser = require ("body-parser");
var PORT = process.env.PORT || 3036;

app.listen(PORT, function(){
  console.log("Server listening on: http://localhost:" + PORT);
});

