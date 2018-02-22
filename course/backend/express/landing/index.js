const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.get('/api/parsetime', (req, res) => {
    const date = new Date(req.query.iso)
    const data = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }
    res.json(data)
})
const textBodyParser = bodyParser.text()
app.post('/helloworld',textBodyParser, (req, res) => {
    res.send(req.body)
})
const jasonBodyParser = bodyParser.json()
app.post('/helloworld/json',jasonBodyParser, (req, res) => {
    res.json(req.body)
})
const urlencodedParser = bodyParser.urlencoded({extended:false})
app.post('/login',urlencodedParser, (req, res) => {
    res.send(`${req.body.username}:${req.body.password}`)
})
app.put('/', (req, res) => res.send('Hello, Put World!'))

const port = process.argv[2]

app.listen(port, () => console.log(`landing server running on port ${port}`))
