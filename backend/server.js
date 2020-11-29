const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

const app = express()
const connectDB = require('./config/db.js')

const productRoutes = require('./routes/productRoutes')

dotenv.config()

connectDB()

app.get('/', (req, res) => {
  res.send('API is running ...')
})

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000 


app.listen(PORT, console.log(
  `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))