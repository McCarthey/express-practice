const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.urlencoded({ extended: false })

// post方法
app.post("/", (req, res) => {
    res.send("Post request to the homepage")
})
// get方法
app.get("/user/list", (req, res) => {
    res.contentType("json")
    res.send({ title: "user list" })
})
// 带参数路由 并且限制路由参数id只能为数字
// eg: curl http://localhost:3000/user/test => Oops,page not found
// eg: curl http://localhost:3000/user/90 => Welcome user 90
app.get('/user/:id([0-9]+)', (req, res) => {
  console.log(req.params.id)
  let id = req.params.id
  res.send(`Welcome user ${id}`)
})

app.post('/user/create', (req, res) => {
  res.contentType('json')
  res.send({ title: 'user create' })
})

// post urlEncodedParser
app.post("/login", urlEncodedParser, (req, res) => {
    if (!req.body) {
        return res.sendStatus(400)
    }
    if (!req.body.username) {
        res.send(`Please upload your name`)
    } else {
        res.send(`welcome, ${req.body.username}`)
    }
})

// post json
app.post("/users", jsonParser, (req, res) => {
    if (!req.body) {
        return res.sendStatus(400)
    }
    console.log(req.body)
    res.send(req.body)
})

// 静态文件中间件
app.use(express.static("public"))

// 404
app.use((req, res, next) => {
    res.status(404).send("Oops,page not found")
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
