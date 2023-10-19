const express = require('express')
const app = express()
const port = 9000

app.use('/', express.static('public/home'))

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
