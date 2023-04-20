// CẦN TẠO ROUTE RIÊNG CHO NEWS VÌ SAU NÀY SẼ CÓN NHIỀU
// THƯ MỤC CON CỦA VIEW, VÍ DỤ NHƯ /views/hehe or /views/hoho
// CÒN TRANG HOME, SEARCH THÌ KO CÓ THƯ MỤC CON
// ĐỌC TIẾP COMMENT TẠI site.js

const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/ViewsController");

// ĐỊNH NGHĨA TUYẾN ĐƯỜNG CON CỦA /views/..
router.use("/:slug", newsController.show);
// ĐỊNH NGHĨA TUYẾN ĐƯỜNG views/
router.use("/", newsController.index);

module.exports = router;
