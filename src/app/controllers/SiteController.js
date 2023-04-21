const Course = require('../models/Course');

class SiteController {
    index(req, res, next) {
        // Ta đang đứng ở Controller, bắn yêu cầu qua Model = find()
        // Model sẽ chọc vào mongodb, nó lấy dữ liệu là courses
        // và trả dữ liệu ra controller, sau đó controller send về client, browser
        Course.find({})
            .then((courses) => res.json(courses))
            .catch(next);
        // .catch((err) => next(err));

        // res.render('home');
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
