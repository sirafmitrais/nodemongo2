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
    },
    url_image: {
        type: String, 
        required: false
    }
})

// const elecSpecSchema = mongoose.Schema({
//     ram: {
//         type: String,
//         required: false
//     },
//     ram_capacity: {
//         type: Number,
//         required: false
//     },
//     ram_merk: {
//         type: String,
//         required: false
//     },
//     memory: {
//         type: String,
//         required: false
//     },
//     memory_capacity: {
//         type: Number,
//         required: false
//     },

// })

// const electronicSchema = mongoose.Schema({
//     merk: {
//         type: String, 
//         required: true
//     }, 
//     color: {
//         type: String, 
//         required: true
//     },
//     spec: {
//         type: elecSpecSchema,
//         required: false
//     }

// })



const Jam = mongoose.model('Jam', productSchema)
// const Electronic = mongoose.model('Electronic', electronicSchema)


module.exports = Jam;
// module.exports = Electronic;

