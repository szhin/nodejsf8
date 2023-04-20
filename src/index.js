const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3001;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

// Xử lí khi GET và POST khi code nodejs
app.use(
    express.urlencoded({
        extended: true,
    }),
);
// Xử lí khi GET và POST khi code javascript (fetch, axios)
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
