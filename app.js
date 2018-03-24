"use strict"

const express = require('express');
const hbs = require('express-handlebars');
const bodyparser = require('body-parser');

var app = express();

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/templates/'
}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views')
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.send('Express working!');
  });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

