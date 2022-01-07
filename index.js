const express = require('express')
const pdf2 = require('pdf-to-base64')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.use("/", express.static(path.join(__dirname, "public")));

app.post("/encode", bodyParser.json(), (req, res)=>{
    var url = req.body.url1

    pdf2(url).then((response)=>{
        res.send({response})
    })
    
})

app.listen(3000, console.log("server running"));