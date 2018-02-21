const net = require('net')

const client = new net.Socket()

client.connect(3000, '192.168.0.16', function () {
    client.write('\n Votad Campiña! \n Fuera la piña!')
})

client.on('data', data => console.log(data.toString()))
