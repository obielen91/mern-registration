const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const mongoose = require('mongoose');

const Event = require('./models/EventModel');


mongoose.connect('mongodb://127.0.0.1:27017/mern-registration');

app.use('/files', express.static('public'));

app.engine('hbs', hbs.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');

// app.get('/mongoose', function (req,res) {
//     Event.findById('').exec((err, event) =>{
//         if(err) {
//             res.send(err);
//         }
//         console.log(post);
//     })
// });





app.listen(8010, function() {
    console.log('Serwer Node.js działa');
});