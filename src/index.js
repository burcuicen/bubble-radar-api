const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.use(bodyParser.json())
const { getAllTrendingKeywords } = require('./services/trending-keyword-service')
const { getAllCompletions } = require('./services/completion-service')
const { getAllFanarts } = require('./services/fanart-service')
const { getAllPopularKeywords } = require('./services/popular-keyword-service')
const { getAllProducts } = require('./services/product-service')


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Bubble Radar API')
})
// Endpoints
app.get('/trending', async (req, res) => {
  try {
      const { skip, limit, searchText, sortBy, filter } = req.query
      const result = await getAllTrendingKeywords({ skip, limit, searchText, sortBy, filter })
      res.json(result)
  } catch (error) {
      res.status(500).send(error.message)
  }
})

app.get('/completion', async (req, res) => {
  try {
      const { skip, limit, searchText, sortBy, filter } = req.query
      const result = await getAllCompletions({ skip, limit, searchText, sortBy, filter })
      res.json(result)
  } catch (error) {
      res.status(500).send(error.message)
  }
})
app.get('/fanart', async (req, res) => {
  try {
      const { skip, limit, searchText, sortBy, filter } = req.query
      const result = await getAllFanarts({ skip, limit, searchText, sortBy, filter })
      res.json(result)
  } catch (error) {
      res.status(500).send(error.message)
  }
})
app.get('/popular', async (req, res) => {
  try {
      const { skip, limit, searchText, sortBy, filter } = req.query
      const result = await getAllPopularKeywords({ skip, limit, searchText, sortBy, filter })
      res.json(result)
  } catch (error) {
      res.status(500).send(error.message)
  }
})
app.get('/products', async (req, res) => {
  try {
      const { skip, limit, searchText, sortBy, filter } = req.query
      const result = await getAllProducts({ skip, limit, searchText, sortBy, filter })
      res.json(result)
  } catch (error) {
      res.status(500).send(error.message)
  }
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
