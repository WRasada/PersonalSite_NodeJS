const express = require('express'),
      router  = express.Router(),
      nodemailer = require('nodemailer');

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
  res.render('portfolio', { title: 'Contact Me'});
});

// router.post('/contact', (req, res) => {
//   let mailForm = {
//     from: req.body.email, // sender address
//     to: 'wesleyrasada@gmail.com', // list of receivers
//     subject: req.body.title, // Subject line
//     text: req.body.text, // plain text body
//   };
//
//   let transporter = nodemailer.createTransport(props);
//
//   transporter.sendMail(mailForm, function(error, info){
//     if(error){
//         alert('Message Failed');
//         res.json({error: 'error'});
//     } else {
//         res.render('contact', {message: 'Message sent!', class: 'alert alert-success successMessage'});
//     };
//   });
// })



module.exports = router;
