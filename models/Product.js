const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    merk: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    warna: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    }
})

const Jam = mongoose.model('Jam', productSchema)

module.exports = Jam;

