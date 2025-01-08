const express = require('express')
const cors = require('cors');
const config = require("./config/index.js");
const router = require('./router');

console.log(config)

const app = express()

app.use(cors({
    origin: '*'
}));

app.use(express.json())

router(app);

app.get('/health', async (req, res) => {
    res.json({"message": "healthy"})
})

app.listen(config.SERVER_PORT, () => {
    console.log(`Server is listening on port ${config.SERVER_PORT}`)
})