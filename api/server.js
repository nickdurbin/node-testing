const express = require('express')
const server = express()
const middleware = require('./middleware')
const routes = require('./routes')

server.use(express.json())
middleware(server)
routes(server)

server.get("/", (req, res, next) => {
  res.send("<h2>I am the server being tested!</h2>")
})

server.use((req, res, next) => {
  res.status(404).json({ message: "The path you were searching does not exist. Please try your request again/"})
})

server.use((err, req, res, next) => {
  res.status(500).json({ message: "The fault of this error is on me, your server. Not you."})
})

module.exports = server;