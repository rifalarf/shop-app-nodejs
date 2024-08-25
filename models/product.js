const mongoose = require ('mongoose')

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
    size: {
        type: String,
        enum: ['S', 'M', 'L', 'XL']
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product