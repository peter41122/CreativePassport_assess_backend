var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');

var app = express();

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use(express.static('upload'));

app.get('/test', (req, res) => {
    res.send('Welcome to your express API');
});

const port = process.env.PORT || 5000;
var server = app.listen(port, () => {
    console.log(`Node server is running on http://localhost:${port}/`);
});

require("./server/routes/upload.route.js")(app)
