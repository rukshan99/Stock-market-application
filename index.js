// Stock Market Portfolio Application By Rukshan Jayasekara

const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000;

// Setting up handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Setting up handlebar routes

// home route
app.get('/', function (req, res) {
    res.render('home');
});
// about me route
app.get('/about', function (req, res) {
    res.render('about');
});
// contact me route
app.get('/contact', function (req, res) {
    res.render('contact');
});

// Setting up the static folder
app.use(express.static(path.join(__dirname, 'public')));
// Setting up the static images folder
app.use(express.static('views/layouts/images'));

app.listen(PORT, () => console.log('Server listening on port ' + PORT + '...'));
