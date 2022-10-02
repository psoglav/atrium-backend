require('dotenv/config')

const cors = require('cors')
const fs = require('fs')
const express = require('express')
const app = express()
const port = process.env.PORT
const path = __dirname + '/build'

app.use(cors())
app.use(express.static(path))

const routes = fs.readdirSync('./routes').map(s => s.replace('.js', ''))
routes.forEach(route => {
  app.use('/api/' + route, require('./routes/' + route))
})

app.get('*', (req, res) => {
  res.sendFile(path + '/index.html')
})

app.listen(port, () => {
  console.log('Server is running on ' + port)
})