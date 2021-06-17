const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    }
    catch (err) {
        console.log(err.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const product = new Product({
            merk: req.body.merk,
            type: req.body.type,
            warna: req.body.warna,
            harga: req.body.harga,
        });

        await product.save();
        res.status(201).json(product);
    }
    catch (err) {
        console.log(err.message);
    }
});

module.exports = router;