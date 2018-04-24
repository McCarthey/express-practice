const express = require('express')
const app = express()

// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })
app.post('/', (req, res) => {
  res.send('Post request to the homepage')
})
app.use(express.static('public'))

// 404
app.use((req, res, next) => {
  res.status(404).send('Oops,page not found')
})

const server = app.listen(3000, () => {
  const host = server.address().address
  const port = server.address().port

  console.log('start on http://%s:%s', host, port)
})
