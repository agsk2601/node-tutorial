const Http = require('http')
const fs = require('fs')
const Path = require('path')

const server = Http.createServer((req, res)=>{
    const data  = fs.readFileSync(Path.resolve(__dirname,"test","test.txt"),"utf8")
    res.write(data)
    res.end()
})

server.listen(5000)