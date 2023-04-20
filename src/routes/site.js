// TRANG HOME, SEARCH THÌ KO CÓ THƯ MỤC CON
// MÀ HOME, SEARCH TƯỞNG TƯỢNG NHƯ CON CỦA localhost/

const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

// Lưu ý: đặt các /search, ... phía trên /
// nếu không thì nó sẽ luôn vào /
// ĐỊNH NGHĨA TUYẾN ĐƯỜNG /search
router.use("/search", siteController.search);

// ĐỊNH NGHĨA TUYẾN ĐƯỜNG /home
router.use("/", siteController.index);

module.exports = router;
