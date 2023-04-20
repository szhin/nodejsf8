const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/ViewsController');

// ĐỊNH NGHĨA TUYẾN ĐƯỜNG CON CỦA /views/..
router.use('/:slug', newsController.show);
// ĐỊNH NGHĨA TUYẾN ĐƯỜNG views/
router.use('/', newsController.index);

module.exports = router;
