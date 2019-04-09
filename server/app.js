const express = require('express')
const app = express()
const data = require('./data')
const path = require('path')

app.use(express.static(path.join(__dirname,'/public')))
app.use('/data/carousel',data.carousel)


app.listen(3001,function(){
    console.log('app is running')
})