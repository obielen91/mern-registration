const Event = require('../models/EventModel');

module.exports = {
    create: (req,res) => {

        let newEvent = new Event({...req.body});
        newEvent.save();

        res.send('Saved user');
    }
}

