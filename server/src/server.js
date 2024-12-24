const express = require('express')
const cors = require('cors');
const router = require('./router');

const PORT = process.env.PORT || 3001;

const app = express()

app.use(cors({
    origin: '*'
}));

app.use(express.json())

router(app);

app.get('/health', (req, res) => {
    console.log("health")
    res.json({"message": "healthy"})
})

app.listen(PORT, () => {
    console.log(`Server is listenissssng on port ${PORT}`)
})