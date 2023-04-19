const { log } = require('console')
const x = require('./test')
const os  = require('os')
const path = require('path')
const fs = require('fs')

//os
// const user  = os.userInfo()
// log(user)
// log(`uptime ${os.uptime} sec`)

// //path
// log(path.sep)
const Path = path.resolve(__dirname,"test","test.txt")
// log(Path)

// // fs
// const file  = fs.readFileSync(Path,"utf8")
// log(file)

fs.readFile(Path,"utf8", (err, data)=>{
    if (err){
        log(err)
        return
    }
    fs.writeFile("./test/datatext.txt","hello  2 world",(err,result)=>{
        if(err){
            log(err)
            return
        }
        log(result)
    },{flag:'a'})
})