const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
  res.setHeader('Content-Security-Policy', "default-src 'self';")
  res.setHeader('Content-Security-Policy', "default-src 'self';")
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/foo.html', (req, res) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline';"
  )
  res.setHeader('Cache-Control', 'public, max-age=604800, immutable')
  res.sendFile(path.join(__dirname + '/foo.html'))
})

app.listen(3000)

console.log('Listening on prt 3000')
