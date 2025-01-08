const nodemailer = require('nodemailer');
const config = require("../config/index.js")

async function testMail() {
  let transporter = nodemailer.createTransport({
    host: config.MAIL_SMTP_HOST,
    port: config.MAIL_PORT,
    secure: config.MAIL_SECURE,
    tls: {
        rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: `"Compass" <${config.MAIL_SENDER}>`,
    to: 'ruudjuf@gmail.com',
    subject: 'Hello ✔',
    text: 'Hello world?',
    html: '<b>Hello world?</b>'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
}

module.exports = testMail;