const express = require("express");
const bodyParser = require("body-parser");


var app = express();
app.use(express.static('public'));
var todoItems = ["hi", "cv"];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    var date = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    var day = date.toLocaleDateString("en-US", options);

    res.render("list", { today: day, newItem: todoItems });
});

app.post("/", function (req, res) {
    var todoItem = req.body.todo;
    todoItems.push(todoItem);
    console.log(todoItem);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("app started");
});
