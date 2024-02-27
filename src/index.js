const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

const router = require('./routes')
const db = require('./config/db')
require('dotenv').config()

// Enable CORS Policy for All requests
app.use(cors())

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World!')
})

db.connect();

router(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})