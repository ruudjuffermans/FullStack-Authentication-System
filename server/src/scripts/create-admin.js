const { prompt } = require("enquirer");
const { authHandler } = require("../handlers");
const { hashPassword } = require("../utils/password");

async function createAdmin() {
    try {
        const admin = {};
        const questions = [
            { type: "input", name: "email", message: "Enter email: " },
            { type: "password", name: "password", message: "Enter password: " },
            { type: "input", name: "firstname", message: "Enter firstname: " },
            { type: "input", name: "lastname", message: "Enter lastname: " }
        ];
        const prompt_return = await prompt(questions);

        admin.email = prompt_return.email;
        admin.password = prompt_return.password;
        admin.firstname = prompt_return.firstname;
        admin.lastname = prompt_return.lastname;

        const hashedPassword = await hashPassword(admin.password);

        // Create the new user
        const newUser = await authHandler.createAdminUser(admin.email, hashedPassword, admin.firstname, admin.lastname);
        console.log(newUser);

        console.log(`Admin user "${admin.firstname} ${admin.lastname}" created successfully`);
    } catch (error) {
        if (error.message.includes("duplicate key error")) {
            console.log(`Email "${admin.email}" is already in use.`);
        } else {
            console.error("An error occurred:", error.message);
        }
    } finally {
        process.exit();
    }
}

createAdmin();
