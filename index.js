const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const mongoose = require('mongoose');

const Event = require('./models/EventModel');

mongoose.connect('mongodb://127.0.0.1:27017/mern-registration');

const eventController = require('./controllers/eventController');

app.use('/files', express.static('public'));
app.use(express.urlencoded({extended: true}));

app.engine('hbs', hbs.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');




// POD TAKIM ADRESEM BĘDZIEMY CHCIELI TO WYŚWIETLAĆ

app.get('/registration', (req, res) => {
    res.render('registrationViews/registration');
});


app.post('/registration', eventController.create);


app.listen(8010, function() {
    console.log('Serwer Node.js działa');
});