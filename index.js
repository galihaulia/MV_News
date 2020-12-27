require('dotenv').config()
const express = require('express');
const http = require('http');
const cors = require('cors')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// const router = require('./routers')

const app = express();

app.use(cors())
app.use(express.json({
    limit: '50mb'
}));
app.use(express.urlencoded({
    extended: false,
    limit: '50mb'
}));

app.get('*', (req, res, next) => {
    res.status(200).json({
        message: "Welcome to the beginning of nothingness.",
        status: 200
    })
})

const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);

server.listen(port, async () => {
    console.log(`Server running at port ${port}`)
})