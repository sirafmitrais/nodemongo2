const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect = ('mongodb://localhost:27017/toko', {useNewUrlParser: true});

const Product = mongoose.model('Product', {
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