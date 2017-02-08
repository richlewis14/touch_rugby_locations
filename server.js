var express = require('express');
var app = express();
var path = require("path");
// Serve Static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);
console.log('App listening on port 3000');