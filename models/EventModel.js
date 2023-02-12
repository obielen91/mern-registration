const mongoose = require('mongoose');

const Event = new mongoose.Schema({
    fullname: String,
    event: String,
    city: String,
}, {
    timestamps: true,
});

module.exports = mongoose.model('Event', Event)