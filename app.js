const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const port = 3000;
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", function (req, res) {
  res.render("Home");
});

app.get("/login", function (req, res) {
  res.render("Login");
});

app.get("/register", function (req, res) {
  res.render("Register");
});

app.listen(port, function () {
  console.log(`Successfully working on port: http://localhost:${port}`);
});
