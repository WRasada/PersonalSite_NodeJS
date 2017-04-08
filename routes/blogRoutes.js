const express = require('express'),
      router  = express.Router();

const dateFormat = require('dateformat');
const Blog = require('../models/blog');

// Create New Blog Post -- POST /blog/new

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

// New Blog Post Form -- GET /blog/new

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

// Show Blog Post by ID -- GET /blog/:id

router.get('/:id', (req, res) => {
  let id = req.params.id;

  Blog.findById(id).then((blog) => {
    res.render('blog/show', { blog });
  }, (e) => {
    res.status(400).send(e);
  });
});

// Edit Blog Post by ID -- GET /blog/:id/edit

router.get('/:id/edit', (req, res) => {
  Blog.findById(req.params.id).then((blog) => {
    res.render('blog/edit', {blog});
  }, (e) => {
    res.status(400).send(e);
  });
});

// Update Blog Post -- PATCH /blog/new/:id

router.patch('/:id', (req, res) => {
  Blog.findByIdAndUpdate(req.params.id, req.body.blogPost).then((blog) => {
    if (req.body.secret === process.env.SECRET) {
      blog.save().then(() => {
        res.redirect('/blog');
      }, (e) => {
        res.status(400).send('hello');
      });
    } else {
      res.send('What do you think your doing..');
    }
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router;
