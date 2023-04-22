const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, maxLength: 600 },
        image: { type: String },
        slug: { type: String, maxLength: 255 },
        videoId: { type: String, required: true },
        level: { type: String },
        // cái slug của generator, khi tạo name, thì nó xoá khoảng trống, xoá dấu và thêm -
        // unique để trùng slug thì nó tự thêm kí tự khác vào
        slug: { type: String, slug: 'name', unique: true },
    },
    { timestamps: true },
);

// Tự tạo collection cái chữ 'Course' => courses
module.exports = mongoose.model('Course', Course);
