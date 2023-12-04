const mongoose = require('mongoose');

const keywordSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    keywords: {
        type: String,
        required: true
    }
});

const Keyword = mongoose.model('Keyword', keywordSchema);

module.exports = Keyword;
