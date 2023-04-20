const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { log } = require("console");
const handlebars = require("express-handlebars").engine;
const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, "public")));

// Xử lí khi GET và POST khi code nodejs
app.use(
  express.urlencoded({
    extended: true,
  }),
);
// Xử lí khi GET và POST khi code javascript (fetch, axios)
app.use(express.json());

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
app.get("/search", (req, res) => {
  res.render("search");
});
app.post("/search", (req, res) => {
  // nếu ko gọi app.use(
  //   express.urlencoded({
  //     extended: true,
  //   }),
  // );
  // thì sẽ console.log ra undefined
  console.log(req.body);
  res.send("");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
