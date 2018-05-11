const mongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost/demo"

mongoClient.connect(url, (err, db) => {
    if (err) throw err
    console.log("数据库已创建")
    const dbase = db.db("demo")
    const objArray = [
        { name: "测试一下", date: dateFormat() },
        { name: "插入多条数据", date: dateFormat() },
        { name: "效果如何", date: dateFormat() }
    ]
    dbase.collection("demoCollectionUndefined").insertMany(objArray, (err, res) => {
        if (err) throw err
        console.log("文档插入成功")
        db.close()
    })
})

function dateFormat() {
    const date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hour = date.getHours()
    
    return `${month}月${day}日 ${hour}`
}
