const path = require('path');
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Edit database, Update course
app.use(methodOverride('_method'));

// Áp dụng middleware cho toàn bộ website
// app.use(bacBaoVe);

// function bacBaoVe(req, res, next) {
//     if (['vethuong', 'vevip'].includes(req.query.ve)) {
//         req.face = 'Gach gach gach';
//         return next();
//     }

//     res.status(403).json({
//         message: 'Access denied',
//         face: req.face,
//     });
// }

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine(
    '.hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', '.hbs');
// đổi / thành , để trên mọi hệ đề hành, join nó sẽ tự điền
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
