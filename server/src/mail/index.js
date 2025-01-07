const nodemailer = require('nodemailer');
const fs = require('fs').promises;
const path = require('path');
const handlebars = require('handlebars');
const config = require("../config/index.js")

const transporter = nodemailer.createTransport({
    host: config.MAIL_SMTP_HOST,
    port: config.MAIL_PORT,
    secure: config.MAIL_SECURE,
    tls: {
        rejectUnauthorized: false
    }
});

const templates = {
  activateAccount: 'activate-account.html',
  resetPassword: 'reset-password.html'
};

async function getTemplateFile(data, code, templateKey) {
  console.log(code)
  console.log(templateKey)
  console.log(data)
  const fileName = templates[templateKey];
  console.log(fileName)
  if (!fileName) {
    throw new Error(`Template key '${templateKey}' not found.`);
  }
  const file = path.resolve("src", "mail", "templates", fileName);
  const content = await fs.readFile(file, "utf8");
  const template = handlebars.compile(content);
  return template(data);
}

async function getTemplate(email, name, code, clientUrl, serverUrl, templateKey) {
  return getTemplateFile(
    { email, name, code, clientUrl, serverUrl },
    templateKey
  );
}


const sender = async function (to, subject, name, code, templateKey) {
  console.log(to, subject, name, code, templateKey)
  try {
    const body = await getTemplate(name, code, templateKey);
    const response = await transporter.sendMail({
      from: {
        name: config.APP_NAME,
        address: config.MAIL_SENDER,
      },
      to: to,
      subject: subject,
      html: body,
    });
    return !!response.accepted;
  } catch (e) {
    console.error("SMTP error", e);
    return false;
  }
};
module.exports = sender;