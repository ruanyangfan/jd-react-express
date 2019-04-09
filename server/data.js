let fs = require('fs')

let imgNames = []
let getImgfile = (path,fileName) => {
    return new Promise((res,rej) => {
        fs.readdir(path,(err,files) => {
            if(err){
                rej('read file fail')
            } else {
                files = files.map(file => {
                    return 'http://localhost:3001/images/' + fileName + '/' +file
                })
                res(files)
            }
        })
    })
}

getImgfile('./public/images/swiper','swiper').then(files => {
    imgNames = files
},() => {
    imgNames = false
})

exports.carousel = (req,res) => {
    let cbName = req.url.split('=')[1]
    const sendData = {
        status: 0,
        msg: '',
        img: ''
    }
    if(imgNames){
        sendData.status = 1
        sendData.msg = 'success'
        sendData.img = imgNames
    }else {
        sendData.msg = 'error'
    }
    let json = JSON.stringify(sendData)
    res.send(cbName + '(' + json + ')') 
}