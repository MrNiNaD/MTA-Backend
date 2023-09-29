const express = require('express')
const { hashPassword, comparePassword } = require('./util/login.util')
const { UserModel } = require('./model/users')
const jwt = require('jsonwebtoken');
require('./db')
const app = express()
const port = 8080

app.use(express.json());

app.use(express.urlencoded({ extended: true }))

const test = async () => {
  const afterHasing = await hashPassword('12345');

  const testHash = '$2b$10$QyBWA3kPnBasNn9LnZoIFOHLu6Nngr1.8B1LbBTmLjdVk.2qbSb7e';

  const testJwt = jwt.sign({
    data: 'foobar2222'
  }, 'secret', { expiresIn: 10 });

  const testVerify = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZm9vYmFyMjIyMiIsImlhdCI6MTY5NjAxODU5NywiZXhwIjoxNjk2MDE4NjU3fQ.H4hYBQUdOq763_CkWZB6AuhmYfOVFfGU84s9bq11u3M', 'secret')
  
  const compareTest = await comparePassword('12345', testHash);

  console.log({ afterHasing, compareTest, testJwt, testVerify });
}


test();

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
