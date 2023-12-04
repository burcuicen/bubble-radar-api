const mongoose = require('mongoose');

const fanartSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true
    }
});

const Fanart = mongoose.model('fanart', fanartSchema);

module.exports = Fanart;
