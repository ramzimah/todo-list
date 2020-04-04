var express = require("express");
var bodyParser = require("body-parser");


var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    var date = new Date();
  
 var options={
weekday:"long",
day :"numeric",
month:"long"
 }
 var day=date.toLocaleDateString("en-US",options);
 
    res.render("list", { kindOfDay: day });
})

app.post("/",function(req,res){
    todoItem=req.body.todo;
    console.log(todoItem);
})

app.listen(3000, function () {
    console.log("app started");
});
