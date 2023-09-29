const express = require('express')
const { hashPassword, comparePassword } = require('./util/login.util')
require('./db')
const app = express()
const port = 8080

app.use(express.json());

app.use(express.urlencoded({ extended: true }))

const test = async () => {
  const afterHasing = await hashPassword('12345');

  const testHash = '$2b$10$QyBWA3kPnBasNn9LnZoIFOHLu6Nngr1.8B1LbBTmLjdVk.2qbSb7e';
  
  const compareTest = await comparePassword('12345', testHash);

  console.log({ afterHasing, compareTest });
}


test();

app.get('/', (req, res) => {
  res.send('Hello World!!!!!!!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
