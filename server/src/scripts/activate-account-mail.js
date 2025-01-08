const { prompt } = require("enquirer");
const { sendActivateAccountMail } = require("../mail");

async function sendMail() {
    try {
        // Questions for user input
        const questions = [
            { type: "input", name: "email", message: "Enter email: " },
            { type: "input", name: "firstname", message: "Enter firstname: " },
        ];

        // Prompt the user
        const answers = await prompt(questions);
        answers.token = "exampleToken123"

        // Extract answers
        const { email, firstname, token } = answers;

        // Call the mail sending function
        await sendActivateAccountMail(email, firstname, token);
        console.log("Activation mail sent successfully!");
    } catch (error) {
        console.error("Error sending activation mail:", error);
    } finally {
        // Exit the terminal after execution
        process.exit();
    }
}

// Execute the function
sendMail();
