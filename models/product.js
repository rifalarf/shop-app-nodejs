const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        minLength: 0,
        required: true
    },
    category: {
        type: String,
        enum: ['Bakery', 'Dessert', 'Pastry', 'Bread'],  // Field category hanya bisa memiliki nilai yang ditentukan
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);


module.exports = Product