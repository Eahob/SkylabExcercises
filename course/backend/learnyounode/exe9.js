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
            count++
            show()
        })
    })
}

exe9(process.argv[2], 0)
exe9(process.argv[3], 1)
exe9(process.argv[4], 2)

function show() {
    if (count === 3) console.log(result.join('\n'))
}
