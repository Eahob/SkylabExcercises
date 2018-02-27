const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const formBodyParser = bodyParser.urlencoded({ extended: false })

const taskApiCall = require('./api-call')

app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    taskApiCall.getTasksList().then(apiResponse => {
        let listToDo = apiResponse.filter(task => !task.done)
        let listDone = apiResponse.filter(task => task.done)
        res.render('index', { listToDo, listDone })
    })
})

app.post('/', formBodyParser, (req, res) => {
    const { text } = req.body
    taskApiCall.addList({text})
    res.redirect('/')
})

app.get('/add/:id', (req, res) => {
    const id = req.params.id
    taskApiCall.setTaskToDone(id)
    res.redirect('/')
})

app.get('/delete/:id', (req, res) => {
    const id = req.params.id
    taskApiCall.deleteTask(id)
    res.redirect('/')
})


const port = 8080
app.listen(port, () => console.log(`Server running on port ${port}`))
