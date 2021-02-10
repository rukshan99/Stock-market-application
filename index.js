const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000;

// Setting up handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Setting up handlebar routes
app.get('/', function (req, res) {
    res.render('home');
});

// Setting up the static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Server listening on port ' + PORT + '...'));
