const router = require('express').Router();
const Product = require('../models/product.schema');
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

//Products

/*  api/products
*   GET: Get all products
*/
router.get("/products", async(req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
});

/*  api/products
*   POST: Add new product
*/
router.post("/products", async(req, res) => {
    const data = req.body;
    const product = await new Product(data).save();
    res.status(200).json(product);
});

//Single Product

/*  api/products/:id
*   GET: Find a single product
*/
router.get("/products/:id", async(req, res) => {
    const id = req.params.id;
    const product = await Product.findOne({_id: new ObjectId(id)})
    res.status(200).json(product);
});

/*  api/products/:id
*   PUT: Update a single product
*/
router.put("/products/:id", async(req, res) => {
    const products = {};
    const id = req.params.id;

    //validation
    products.name = req.body.name;
    products.brand = req.body.brand;
    products.price = req.body.price;
    products.quantity = req.body.quantity;

    const product = await Product.findOneAndUpdate({_id: new ObjectId(id)}, {$set: products}, {new: true});
    res.status(200).json(product);
});

/*  api/products/:id
*   DELETE: Delete a single product
*/
router.delete("/products/:id", async(req, res) => {
    const id = req.params.id;
    const product = await Product.deleteOne({_id: new ObjectId(id)});
    res.status(200).json(product);
});

module.exports = router;