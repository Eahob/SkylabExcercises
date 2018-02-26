require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const formBodyParser = bodyParser.urlencoded({ extended: false })

const app = express()
app.use(express.static('public'))
app.set('view engine', 'pug')
let ids = 1

const tasks = []//[{id:ids++,text:'comprar pan',done:false},{id:ids++,text:'comprar leche',done:false},{id:ids++,text:'comprar huevos',done:false},{id:ids++,text:'ir al gym',done:true},{id:ids++,text:'condones',done:true}]

app.post('/tasks',formBodyParser, (req, res, next) => {
    const {text} = req.body
    tasks.push({id:ids++,text:text,done:false})
    res.redirect('/tasks')
    /*
    const todoList = tasks.filter(task => {
        return !task.done
    })
    const doneList = tasks.filter(task => {
        return task.done
    })
    res.render('index', { listToDo: todoList,listDone:doneList } )
    */
})
app.get('/tasks', (req, res) => {
    const todoList = tasks.filter(task => {
        return !task.done
    })
    const doneList = tasks.filter(task => {
        return task.done
    })
    res.render('index', {listToDo: todoList,listDone:doneList } )
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
