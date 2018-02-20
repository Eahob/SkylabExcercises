var net = require('net')

function oneLeadingZero(number) {
    return number < 10 ? '0' + number : number
}

var server = net.createServer(function (socket) {
    // socket handling logic
    let date = new Date()
    socket.end(`${date.getFullYear()}-${oneLeadingZero(date.getMonth() + 1)}-${oneLeadingZero(date.getDate())} ${oneLeadingZero(date.getHours())}:${oneLeadingZero(date.getMinutes())}\n`)
})
server.listen(process.argv[2])

/*
var net = require('net')

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
}

function now() {
    var d = new Date()
    return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
*/
