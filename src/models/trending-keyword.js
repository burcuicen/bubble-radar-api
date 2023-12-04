const mongoose = require('mongoose');

const trendingKeywordSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    keywords: {
        type: String,
        required: true
    }
});

const TrendingKeyword = mongoose.model('TrendingKeyword', trendingKeywordSchema);

module.exports = TrendingKeyword;
