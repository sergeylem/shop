const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
exports.getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

// @desc    Fetch single product
// @route   GET /api/product/:id
// @access  Public
exports.getProductById = asyncHandler(async (req, res) => {
  product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404).json({ message: 'Product is not found' })
  }
})

// @desc    Delete single product
// @route   Delete /api/product/:id
// @access  Private/Admin
exports.deleteProduct = asyncHandler(async (req, res) => {
  product = await Product.findById(req.params.id)

  if (product) {
    product.remove()
    res.json({message: 'Product removed'})
  } else {
    res.status(404).json({ message: 'Product is not found' })
  }
})



