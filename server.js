var express = require('express');
var bodyParser= require('body-parser');
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');
var app = express();
var path = require("path");
var mongoUrl = 'mongodb://localhost:27017/touch_locations';
var MongoClient = require('mongodb').MongoClient
var db;

app.use(bodyParser.urlencoded({extended: true}))
// Serve Static files
app.use(express.static(path.join(__dirname, 'public')));

// Connect to db before launching app
MongoClient.connect(mongoUrl, (err, database) => {
  if (err) return console.log(err)
    db = database
    app.listen(3000, () => {
      console.log('App listening on 3000')
  })
})

// Form Page
app.get('/touch_locations_form', function(req, res) {
  displayForm(res);
});

// Post Form
app.post('/locations', function(req, res) {
  //processAllFieldsOfTheForm(req, res);
  processFormFieldsIndividual(req, res);
});

// Functions
function displayForm(res) {
    fs.readFile('public/touch_location_form.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

function processAllFieldsOfTheForm(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        //Store the data from the fields in your data store.
        //The data store could be a file or database or any other store based
        //on your application.
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        res.write('received the data:\n\n');
        res.end(util.inspect({
            fields: fields,
            files: files
        }));
    });
}

function processFormFieldsIndividual(req, res) {
    //Store the data from the fields in your data store.
    //The data store could be a file or database or any other store based
    //on your application.
    var fields = [];
    var form = new formidable.IncomingForm();
    form.on('field', function (field, value) {
        console.log(field);
        console.log(value);
        fields[field] = value;
    });

    form.on('end', function () {
      console.log(fields);
      db.collection('touch_locations').save(fields, (err, result) => {
    if (err) return console.log(err)
      res.redirect('/')
    });
        // res.writeHead(200, {
        //     'content-type': 'text/plain'
        // });
        // res.write('received the data:\n\n');
        // res.end(util.inspect({
        //     fields: fields
        // }));
    });
}