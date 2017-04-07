const mongoose = require('mongoose');
const dateFormat = require('dateformat');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: String,
  date: {
    type: Date,
    default: Date.now
  },
  body: String
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
