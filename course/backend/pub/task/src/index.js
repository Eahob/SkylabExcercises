require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const formBodyParser = bodyParser.urlencoded({ extended: false })

const app = express()
app.use(express.static('public'))
app.set('view engine', 'pug')

let ids = 1
const tasks = []

function filterTasksByDone() {
    let done = []
    let oned = []
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].done) {
            done.push(tasks[i])
        } else {
            oned.push(tasks[i])
        }
    }
    return [oned, done]
}

app.post('/tasks', formBodyParser, (req, res, next) => {
    const { text } = req.body
    tasks.push({ id: ids++, text: text })
    res.redirect('/tasks')
})

app.get('/tasks', (req, res) => {
    //const todoList = tasks.filter(task => !task.done)
    //const doneList = tasks.filter(task => task.done)
    //res.render('index', { listToDo: todoList, listDone: doneList })
    let [listToDo, listDone] = filterTasksByDone()
    res.render('index', { listToDo, listDone })
})

app.get('/add/:id', (req, res) => {
    const id = req.params.id
    const index = tasks.findIndex(task => task.id == id)
    tasks[index].done = true
    res.redirect('/tasks')
})

app.get('/delete/:id', (req, res) => {
    const id = req.params.id
    const index = tasks.findIndex(task => task.id == id)
    tasks.splice(index,1)
    res.redirect('/tasks')
})
/*
app.get('/tasks/todo', (req, res) => {
    const todoList = tasks.filter(task => {
        return !task.done
    })
    res.render('todo', { listToDo: todoList } )
})
app.get('/tasks/done', (req, res) => {
    const doneList = tasks.filter(task => {
        return task.done
    })
    res.render('done', {listDone:doneList } )
})
*/

const port = process.env.PORT
app.listen(port, () => console.log(`Server running on port ${port}`))
