const mongoose = require('mongoose')
var productschema = new mongoose.Schema({
    name: {
        type: String
    },
    brand: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    }
});

module.exports = mongoose.model('products', productschema)