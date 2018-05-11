const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.urlencoded({ extended: false })

app.get('/user/list', (req, res) => {
  res.contentType('json')
  res.send({ title: 'user list' })
})
app.post('/', (req, res) => {
  res.send('Post request to the homepage')
})

app.post('/login', urlEncodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(400)
  }
  if (!req.body.username) {
    res.send(`Please upload your name`)
  } else {
    res.send(`welcome, ${req.body.username}`)
  }
})

app.post('/users', jsonParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(400)
  }
  console.log(req.body)
  res.send(req.body)
})

app.use(express.static('public'))

// 404
app.use((req, res, next) => {
  res.status(404).send('Oops,page not found')
})

const server = app.listen(3000, () => {
  const host = server.address().address
  const port = server.address().port

  console.log(`start on http://${host}:${port}`)
})

/**
 * test post/get command line
 *
 * (use cmder in windows):
 *  curl http://localhost:3000/
 *  curl -d "" http://localhost:3000/
 *  curl -d "" http://localhost:3000/testJson
 */
