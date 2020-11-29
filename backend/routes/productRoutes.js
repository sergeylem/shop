const express = require('express')

const router = express.Router()
const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get('/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  }))

// @desc    Fetch single product
// @route   GET /api/product/:id
// @access  Public
router.get('/:id',
  asyncHandler(async (req, res) => {
    product = await Product.findById(req.params.id)

    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'Product is not found' })
    }
  }))

module.exports = router