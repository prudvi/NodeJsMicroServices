"use strict";
const nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
const { emailContent1, emailContent2 } = require('./emailContent');
// async..await is not allowed in global scope, must use a wrapper
async function main(data) {

  let subjectText = '';
  if (data.length) {
    for (let x=0; x<data.length; x++) {
      subjectText += '<li style=\"color: green; font-size: 14px; font-style: italic;\">' + data[x] + '</li>';
    }
  }
  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'prudvi2k7@gmail.com',
      pass: 'godjesus9642200931'
    }
  }));

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'prudvi2k7@gmail.com', // sender address
    to: "prudvi2k77@icloud.com", // list of receivers
    subject: "Regular Updates on Stock", // Subject line
    //text: subjectText, // plain text body
    html: emailContent1 + subjectText + emailContent2 // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

//main(data).catch(console.error);

module.exports = {
    sendMail: main
}