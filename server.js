
const { createServer } = require('http')
const express = require('express')

const app = express()

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname })
});

const server = createServer(app)

const port = 3000;

server.listen(port, () => {
    console.log(`server running on port ${port}`)
})