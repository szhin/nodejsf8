const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars").engine;
const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(".hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});
//http://localhost:3001/search?q=f8%20lap%20trinh&ref=mycv&author=shin
app.get("/search", (req, res) => {
  console.log(req.query);
  // { q: 'f8 lap trinh', ref: 'mycv', author: 'shin' }
  res.render("search");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
