const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  next()
})

router.post('/login', (req, res) => {
  res.send('Birds home page')
})

// define the about route
router.get('/signup', (req, res) => {
  res.send('About birds')
})

module.exports = router