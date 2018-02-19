var fs = require('fs')
var extension = '.'+process.argv[3]
fs.readdir(process.argv[2], function (err, list) {
    if (err) throw err;
    let results = list.filter(function (fileName){
        return fileName.slice(-extension.length) === extension
    })
    console.log(results.join('\n'))
})

/*
var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
    if (err) return console.error(err)
    files.forEach(function (file) {
    if (path.extname(file) === ext) {
        console.log(file)
    }
    })
})
*/
