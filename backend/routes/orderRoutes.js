// const express = require('express')
import express from 'express'

const router = express.Router()

import { 
  addOrderItems, 
  getOrderById, 
  updateOrderToPaid, 
  getOrders 
} from '../controllers/orderController.js'

import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/')
  .post(protect, addOrderItems)
  .get(protect, admin, getOrders)

router.route('/:id').get(protect, getOrderById)

router.route('/:id/pay').put(protect, updateOrderToPaid)


// module.exports = router
export default router