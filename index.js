const express = require('express')
const path = require('path')
const app = express()
const encondeController = require('./encondeController')

app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json())

app.post("/encode", encondeController)

app.listen(3000, console.log("server running"));