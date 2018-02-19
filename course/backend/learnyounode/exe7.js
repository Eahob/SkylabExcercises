//console.log(process.argv)

const http = require('http')

http.get(process.argv[2], function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
         console.log(chunk);
    })
    //res.on('data',console.log)
})

/*

var http = require('http')

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
}).on('error', console.error)

*/
