const fs = require("fs/promises");
const path = require("path");
const h = require("handlebars");
const config = require("../config/index.js");
const mailer = require("./transporter.js");



async function getTemplateFile(data, fileName) {

    const file = path.resolve("src", "mail", "templates", fileName);

    const content = await fs.readFile(file, "utf8");

    const template = h.compile(content);

    const result = template(data);

    return result;

}



async function getActivateAccountTemplate(email, name, code, clientUrl, serverUrl) {

    return getTemplateFile(

        { email, name, code, clientUrl, serverUrl },

        "activate-account.html"

    );

}



async function getPasswordResetTemplate(email, name, code, clientUrl, serverUrl) {

    return getTemplateFile(

        { email, name, code, clientUrl, serverUrl },

        "reset-password.html"

    );

}


module.exports = {
    getActivateAccountTemplate,
    getPasswordResetTemplate
};