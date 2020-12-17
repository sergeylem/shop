const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const { notFound } = require('./middleware/errorMiddleware')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db.js')

const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')
const uploadRoutes = require('./routes/uploadRoutes')

const app = express()

dotenv.config()
connectDB()


app.get('/', (req, res) => {
  res.send('API is running ...')
})

app.use(express.json()) //that will allow us to accept JSON data in the body

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

// const __dirname = path.resolve()
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000


app.listen(PORT, console.log(
  `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))