const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const hbsHelpers = require('handlebars-helpers');
const mongoose = require('mongoose');

const Event = require('./models/EventModel');

const eventRouter = require('./routes/eventRoutes');

mongoose.connect('mongodb://127.0.0.1:27017/mern-registration');

const hbsEngine = hbs.engine({extname: '.hbs'});
hbsHelpers(hbsEngine.handlebars, {});
app.engine('hbs', hbsEngine);
app.set('view engine', 'hbs');

app.use('/files', express.static('public'));
app.use(express.urlencoded({extended: true}));

app.use('/registration', eventRouter);

app.listen(8010, function() {
    console.log('Serwer Node.js działa');
});