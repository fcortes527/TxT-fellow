var express = require('express');
var path = require("path");
var app = express();
var port = 3000; 

var server = app.listen(port, function () {
    var host = server.address().address
    console.log('listening on port' ,port)
})

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Welcome to Node-Express Pages');
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/about.html'));
});


app.get('/home', (req,  res) => {
    res.sendFile(path.join(__dirname + '/home.html'));
});

app.get('/contact', (req,   res) => {
    res.sendFile(path.join(__dirname + '/contact.html'));
});
