const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, maxLength: 600 },
        image: { type: String },
        slug: { type: String, maxLength: 255 },
        videoId: { type: String, required: true },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true },
        deleted: { type: Boolean, default: false },
    },
    { timestamps: true },
);

// Add Plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

// Tự tạo collection cái chữ 'Course' => courses
module.exports = mongoose.model('Course', Course);
