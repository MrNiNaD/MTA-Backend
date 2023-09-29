const express = require('express')
const { hashPassword, comparePassword } = require('./util/login.util')
const { UserModel } = require('./model/users')
const jwt = require('jsonwebtoken');
require('./db')
const app = express()
const port = 8080

app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
  const response = await UserModel.create({
    name: 'Ninad',
    email: 'ninadparkar273@gmail.com',
    password: '123456',
    userType: 'normal-user',
  });

  res.send(response)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
