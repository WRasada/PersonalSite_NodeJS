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
    from: req.body.email, // sender address
    to: 'wesleyrasada@gmail.com', // list of receivers
    subject: req.body.title, // Subject line
    text: req.body.text, // plain text body
  };

  let transporter = nodemailer.createTransport(props);

  transporter.sendMail(mailForm, function(error, info){
    if(error){
        alert('Message Failed');
        res.json({error: 'error'});
    } else {
        console.log(mailForm.from);
        res.render('contact', {message: 'Message sent!', class: 'alert alert-success successMessage'});
    };
  });
})



module.exports = router;
