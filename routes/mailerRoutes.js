// Mailer Routes
const nodemailer = require('nodemailer');
const mailer = require('express').Router();

mailer.post('/', sendChangeInfo);

function sendChangeInfo(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var touchClubName = req.body.touchClubName;
  var message = req.body.message;
    var mailOptions = {
      from: process.env.EMAIL_ADDRESS, // sender address
      to: process.env.EMAIL_ADDRESS, // list of receivers
      subject: 'Change Info request from Touch Rugby Locations website', // Subject line
      html: name + '<br>' + email + '<br>' + touchClubName + '<br>' + message // Body
};

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_ADDRESS, // Your email id
            pass: process.env.EMAIL_PASSWORD // Your password
        }
    });

    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        req.flash('error', 'There seems to have been a problem in sending your message, please try again');
      }else{
        req.flash('success', 'Thank you for your message, I will get back you as soon as I can');
      };
      res.redirect('/');
    });
}


module.exports = mailer;
