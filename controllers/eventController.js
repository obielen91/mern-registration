const Event = require('../models/EventModel');

module.exports = {
    create: (req,res) => {

        let newEvent = new Event(req.body);
        newEvent.save();

        res.redirect('/registration');   
    },

    index: (req,res) => {
        Event.find({}).lean().exec((err, events) => {
            if(err) {
                res.send('Get events error');
            }
            res.render('registrationViews/registration', {events: events});
        })
    },

    delete: (req,res) => {
        Event.findByIdAndDelete(req.params.id).exec((err) => {
            if (err) {
                res.send('Delete event error');
            }
            res.redirect('/registration');
        })
    }
};

