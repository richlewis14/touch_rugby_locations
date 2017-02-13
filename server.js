const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
// Serve Static files

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(PORT);
console.log('App listening on %d', PORT);

module.exports = app;
