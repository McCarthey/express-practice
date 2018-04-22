const express = require('express');
const app = express();

// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })

app.use(express.static('public'))

const server = app.listen(3000,()=>{
    const host = server.address().address;
    const port = server.address().port;

    console.log('start on http://%s:%s',host,port);

});