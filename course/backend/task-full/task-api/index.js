const express = require('express')

const app = express()
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()

let tasks = []
let ids = 1

app.post('/api/tasks', jsonBodyParser, (req, res) => {
    const { text } = req.body
    if (text.length) {
        tasks.push({ id: ids++, text, done: false })
        res.json('Task added to list')
    } else {
        res.json('Invalid task registration')
    }
})

app.get('/api/tasks', (req, res) => {
    res.json(tasks)
})

app.get('/api/tasks/done', (req, res) => {
    const tasksDone = tasks.filter(task => task.done)
    res.json(tasksDone.map(({ text }) => ({ text })))
})

app.get('/api/tasks/todo', (req, res) => {
    const todo = tasks.filter(task => !task.done)
    res.json(todo.map(({ text }) => ({ text })))
})

app.put('/api/tasks/:id', (req, res) => {
    const { id } = req.params
    const find = tasks.find(task => task.id == id)
    find.done = true
    res.send('Task marked as done')
})

app.delete('/api/tasks/:id', (req, res) => {
    const { id } = req.params
    const index = tasks.findIndex(task => task.id == id)
    if (index < 0) {
        res.json({ error: "No task to delete" })
    } else {
        tasks.splice(index, 1)
        res.send('Task succesfully deleted')
    }
})

app.delete('/api/tasks', (req, res) => {
    tasks = []
    res.send('All deleted')
})

app.patch('/api/tasks/:id', jsonBodyParser, (req, res) => {
    const id = req.params.id
    const { text } = req.body
    const index = tasks.findIndex(task => task.id == id)
    if (index < 0) {
        res.json({ error: "No task to change" })
    } else {
        tasks[index].text = text
        res.json(tasks[index])
    }
})

const port = 5000
app.listen(port, () => console.log(`Server listening on port ${port}`))
