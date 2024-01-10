const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "content-type, Authorization");

  next();
});

const { getAllTrendingKeywords } = require('./services/trending-keyword-service')
const { getAllCompletions } = require('./services/completion-service')
const { getAllFanarts } = require('./services/fanart-service')
const { getAllPopularKeywords } = require('./services/popular-keyword-service')
const { getAllProducts } = require('./services/product-service')
const NicheSearchService = require('./services/niche-search-service');



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
// NicheSearch Routes
app.post('/my-niche-search', async (req, res) => {
  try {
      const result = await NicheSearchService.create(req.body);
      res.status(201).json(result);
  } catch (error) {
      res.status(500).send(error.message);
  }
});

app.get('/my-niche-search', async (req, res) => {
  try {
      const result = await NicheSearchService.getAll();
      res.json(result);
  } catch (error) {
      res.status(500).send(error.message);
  }
});

app.get('/my-niche-search/:id', async (req, res) => {
  try {
      const result = await NicheSearchService.getById(req.params.id);
      res.json(result);
  } catch (error) {
      res.status(500).send(error.message);
  }
});

app.put('/my-niche-search/:id', async (req, res) => {
  try {
      const result = await NicheSearchService.updateById(req.params.id, req.body);
      res.json(result);
  } catch (error) {
      res.status(500).send(error.message);
  }
});

app.delete('/my-niche-search/:id', async (req, res) => {
  try {
      await NicheSearchService.deleteById(req.params.id);
      res.status(204).send();
  } catch (error) {
      res.status(500).send(error.message);
  }
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
