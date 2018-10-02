// server.js
const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

console.log(__dirname)
app.use(serveStatic(path.join(__dirname, '/dist')))

app.use((err, request, response, next) => {
  // log the error, by now it's just console.log
  console.log(err)
  response.status(500).send('Something broke!')
  next()
})

app.listen(port)
console.log(`Server is up & running on port ${port}`)
