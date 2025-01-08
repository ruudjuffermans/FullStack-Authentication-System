const config = require("../config/index.js");
const { transporter } = require("./transporter.js");

async function sendActivateAccountMail(email, name, code) {

    const template = await getActivateAccountTemplate(

        encodeURIComponent(email),

        name,

        code,

        config.CLIENT_URL,

        config.SERVER_URL

    );

    const result = mailer(email, "Verify your email", template);

    if (!result) {

        console.error("Sending email did not work");

    }

}



async function sendResetPasswordMail(email, name, code) {

    const template = await getPasswordResetTemplate(

        encodeURIComponent(email),

        name,

        code,

        config.CLIENT_URL,

        config.SERVER_URL

    );

    const result = mailer(email, "Reset your password", template);

    if (!result) {

        console.error("Sending email did not work");

    }

}

module.exports = {
    sendActivateAccountMail,
    sendResetPasswordMail
};