var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");

//app config
mongoose.connect("mongodb://localhost/restful_blog");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//schema & model config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now()}
});

var Blog = new mongoose.model("Blog", blogSchema);

//RESTful routes
app.get("/blogs", function (req, res) {

});

app.get("/blogs/new", function (req, res) {});

app.post("/blogs", function (req, res) {});

app.get("/blogs/:id", function (req, res) {});

app.get("/blogs/:id/edit", function (req, res) {});

app.put("/blogs/:id", function (req, res) {});

app.delete("/blogs/:id", function (req, res) {});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});