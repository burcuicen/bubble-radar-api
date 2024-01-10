
const mongoose = require('mongoose');

const nicheSearchSchema = new mongoose.Schema({
    trendingKeywords: {
        type: Array,
        required: false
    },
    mainTag: {
        type: String,
        required: false
    },
    tags: {
        type: Array,
        required: false
    },
    niche: {
        type: String,
        required: false
    },
    plannedUploadCount: {
        type: Number,
        required: false
    },
    note: {
        type: String,
        required: false
    }
    
});

const NicheSearch = mongoose.model('NicheSearch', nicheSearchSchema);

module.exports = NicheSearch;
