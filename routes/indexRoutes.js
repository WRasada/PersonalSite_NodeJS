const express = require('express'),
      router  = express.Router();

router.get('/', (req, res) => {
  res.render('home', { title: 'Wesley Rasada' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me'});
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Me'});
});

router.get('/portfolio', (req, res) => {
  res.render('contact', { title: 'Contact Me'});
});

router.get('/blog', (req, res) => {
  res.render('contact', { title: 'Contact Me'});
});

module.exports = router;
