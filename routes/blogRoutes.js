const express = require('express'),
      router  = express.Router();

const dateFormat = require('dateformat');
const Blog = require('../models/blog');

router.get('/', (req, res) => {
  let post = new Blog({
    title: 'Hello',
    body: 'test1',
  });

  Blog.find().then((blogs) => {
    blogs = blogs.reverse();
    res.render('blog/index', { title: 'My Blog', blogs})
  }, (e) => {
    res.status(400).send(e);
  });
});

router.get('/:id', (req, res) => {
  let id = req.params.id;

  Blog.findOne({ _id.$oid: id }).then((blog) => {
    res.render('blog/post', { blog });
  }, (e) => {
    res.status(400).send(e);
  });
});

module.exports = router;
