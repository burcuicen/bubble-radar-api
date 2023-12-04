const mongoose = require('mongoose');

const completionSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true
    }
});

const Completion = mongoose.model('Completion', completionSchema);

module.exports = Completion;
