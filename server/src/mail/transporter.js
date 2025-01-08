const nodemailer = require('nodemailer');
const config = require("../config/index.js")

const transporter = nodemailer.createTransport({
    host: config.MAIL_SMTP_HOST,
    port: config.MAIL_PORT,
    secure: false

});

const smtpSender = async function (to, subject, body) {
    try {
        const response = await transporter.sendMail({
            from: {
                name: config.APP_NAME,
                address: config.MAIL_SENDER,
            },
            to,
            subject,
            html: body,
        });
        return !!response.accepted;
    } catch (e) {
        console.error("SMTP error", e);
        return false;
    }
};

module.exports = smtpSender
