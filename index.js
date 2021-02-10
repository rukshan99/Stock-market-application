// Stock Market Portfolio Application By Rukshan Jayasekara

const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const path = require('path');
const request = require('request');

const PORT = process.env.PORT || 5000;

// Setting up handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// API Key pk_5d2979a1bc6b4b7088e51a6de45011b5
// Create callApi function
function callApi(finishedAPI) {
	request('https://cloud.iexapis.com/stable/stock/fb/quote?token=pk_5d2979a1bc6b4b7088e51a6de45011b5', 
		{ json: true }, (err,res,body) =>{

		if(err){
			return console.log(err);
		}
		if(res.statusCode === 200){
			finishedAPI(body);
		}
	});
}


// Setting up handlebar routes

// home route
app.get('/', function (req, res) {
	callApi(function(doneAPI){
    	res.render('home', {
    		stock: doneAPI
    	});
    });
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
