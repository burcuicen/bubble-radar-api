const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    keywords: {
        type: String
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
