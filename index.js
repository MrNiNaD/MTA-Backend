const express = require('express')
require('./db')
const { loadAllRoutes } = require('./router/allRouter')
const app = express()
const port = 8080

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

loadAllRoutes(app)

app.get('/', async (req, res) => {
  res.send('API are working!!!!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
