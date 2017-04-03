const express = require('express'),
      router  = express.Router();

const dateFormat = require('dateformat');
const Blog = require('../models/blog');

router.get('/', (req, res) => {
  let post = new Blog({
    title: 'Hello',
    body: 'test1',
  });
  
  post.save();

  Blog.find().then((blogs) => {
    res.render('blog', { title: 'My Blog', blogs})
  }, (e) => {
    res.status(400).send(e);
  });
});

module.exports = router;
