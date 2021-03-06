const path = require('path');
const express = require('express')
const app = express()
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/calculator.html'));
})

const port = process.env.PORT || 3000;
app.listen(port)
