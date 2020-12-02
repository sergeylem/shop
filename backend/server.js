const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

const app = express()

app.use(express.json()) //that will allow us to accept JSON data in the body

const connectDB = require('./config/db.js')

const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')

dotenv.config()

connectDB()

app.get('/', (req, res) => {
  res.send('API is running ...')
})

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000 


app.listen(PORT, console.log(
  `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))