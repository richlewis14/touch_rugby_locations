var express = require('express');
var app = express();
var path = require("path");
var PORT = process.env.PORT || 3000;
// Serve Static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT);
console.log('%d App listening on %d', process.pid, PORT);