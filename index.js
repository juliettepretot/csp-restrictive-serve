const express = require('express')
const path = require('path')
const app = express()

app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'none'; sandbox allow-scripts;"
  )
  return next()
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(3000)

console.log('Listening on prt 3000')
