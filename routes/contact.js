var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});


router.post('/send', function(req, res, next){
  var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'ghstmai1er@gmail.com',
        pass: 'p0khara@123'
      }
  });
  var mailOptions = {
    from: 'naya user',
    to: 'ghstmai1er@gmail.com',
    subject: 'Naya Client',
    text: 'You have a new email with following details... Name:' + req.body.name + 'Email: ' + req.body.email + 'Message: ' + req.body.message,
    html: '<p>(HTML version) You have a new email with following details... Name:</p><ul><li> Name: '+req.body.name+'</li><li> Email: '+req.body.email+ '</li><li> Message: '+req.body.message+'</li></ul>'
  };
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.redirect('/');
    } else {
      console.log('Message Sent: '+info.response);
      res.redirect('/');
    }
  })
});

module.exports = router;
