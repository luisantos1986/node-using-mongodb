const mongoose = require('mongoose')
const { ProductSchema } = require('../models/models.js')


const Product = mongoose.model('Product', ProductSchema)

export const addNewProduct = (req, res) => {
    let newProduct = new Product(req.body);

    newProduct.save((err, Product) => {
        if (err) {
            res.send(err)
        }
        res.json(Product)
    })
}