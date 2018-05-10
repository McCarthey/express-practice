const mongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost/demo"

mongoClient.connect(url, (err, db) => {
    if (err) throw err
    console.log("数据库已创建")
    const dbase = db.db("demo")
    const obj = { name:'测试一下',date: new Date()}
    dbase.collection("demoCollection").insertOne(obj,(err,res)=>{
        if(err) throw err
        console.log('文档插入成功')
        db.close()
    })
})
