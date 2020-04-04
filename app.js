var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");

var app = express();
app.set("viw engine","ejs");

app.get("/", function (req, res) {
    
})



app.listen(3000, function () {
    console.log("app started");
});
