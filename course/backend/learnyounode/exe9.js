const http = require('http')
let count = 0;
let result = ['', '', '']

function exe9(url, id) {
    http.get(url, function (response) {
        response.setEncoding('utf8')
        response.on('data', function (data) {
            result[id] += data
        })
        response.on('error', console.error)
        response.on('end', function () {
            if (++count === 3) {
                console.log(result.join('\n'))
            }
        })
    })
}

exe9(process.argv[2], 0)
exe9(process.argv[3], 1)
exe9(process.argv[4], 2)

/*
var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }

          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }

    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }
*/
