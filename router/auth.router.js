const express = require('express')
const { UserModel } = require('../model/users')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  next()
})

router.post('/login', (req, res) => {
  res.send('login')
})

// define the about route
router.post('/signup', async (req, res) => {
  try {
    const body = req?.body ?? {};

    const response = await UserModel.create(body)

    res.send(response)
  } catch (error) {
    res.status(400).send({ message: error?._message })
  }
})

module.exports = router