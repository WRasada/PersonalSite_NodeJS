const express = require('express'),
      router  = express.Router();

const dateFormat = require('dateformat');
const Blog = require('../models/blog');

router.post('/new', (req, res) => {
  let post = new Blog({
    title: req.body.title,
    body: req.body.body
  });

  if (req.body.secret === process.env.SECRET) {
    post.save().then(() => {
      res.redirect('/blog');
    }, (e) => {
      res.status(400).send(e);
    });
  } else {
    res.send('What do you think your doing..');
  }
});

router.get('/new', (req, res) => {
  res.render('blog/new');
});

router.get('/', (req, res) => {

  Blog.find().then((blogs) => {
    blogs = blogs.reverse();
    res.render('blog/index', { title: 'My Blog', blogs})
  }, (e) => {
    res.status(400).send(e);
  });
});

router.get('/:id', (req, res) => {
  let id = req.params.id;

  Blog.findById(id).then((blog) => {
    res.render('blog/post', { blog });
  }, (e) => {
    res.status(400).send(e);
  });
});


module.exports = router;
