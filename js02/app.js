const express = require('express')
const app = express()
const port = 9000

app.use('/', express.static('public/home'))
app.use('/about', express.static('public/about'))
app.use('/contact', express.static('public/contact'))

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
