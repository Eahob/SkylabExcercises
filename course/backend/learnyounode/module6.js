var fs = require('fs')
var path = require('path')

module.exports = function (folder,extension,callback) {
    fs.readdir(folder, function (err, files) {
        if (err) return callback(err)
        let result = files.filter(function (file) {
            return path.extname(file) === '.' + extension
        })
        callback(null,result)
    })
}

/*
const fs = require('fs')
const path = require('path')

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}
*/