const express = require('express'),
      router  = express.Router(),
      nodemailer = require('nodemailer');

const validator = require('../middleware/validate');
const { props }  = require('../config/email');

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
  res.render('portfolio', { title: 'Portfolio'});
});

router.post('/contact', validator.contactValidator, (req, res) => {

  let mailForm = {
    to: 'wesleyrasada@gmail.com', // list of receivers
    subject: `${req.body.email} - ${req.body.title}`, // Subject line
    html: `<p>${req.body.text}</p>`
  };

  let transporter = nodemailer.createTransport(props);

  transporter.sendMail(mailForm, function(error, info){
    if(error){
        res.json({error: 'error'});
    } else {
        res.render('contact', {message: 'Message sent!', class: 'alert alert-success successMessage'});
    };
  });
})



module.exports = router;
