const fs = require('fs')

const origin = process.argv[2]
const to = process.argv[3]

if (!origin) throw Error('No file specified')
if (!to) throw Error('No file destination')

fs.readFile(origin, function (err, data) {
    if (err) throw err
    fs.writeFile(to, data, function (err) {
        if (err) throw err
    })
})
