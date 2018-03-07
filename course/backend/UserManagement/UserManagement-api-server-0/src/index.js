require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const uuid = require('uuid/v4')
const { success, fail } = require('./api-utils')
const cors = require('cors')

const port = process.env.PORT
const host = process.env.MONGO_HOST
const mongo_port = process.env.MONGO_PORT
const database = process.env.MONGO_DB
const collection = process.env.MONGO_COL

mongoose.connect(`mongodb://${host}/${database}`)
const User = mongoose.model(collection, { id: String, name: String, surname: String, email: String, username: String, password: String })

const app = express()
app.use(cors())
const jsonBodyParser = bodyParser.json()

app.get('/api/users', (req, res) => {
    User.find({}, { _id: 0, id: 1, name: 1, surname: 1, email: 1, username: 1 }).then(users => {
        res.json(success(users))
    })
})
function validate(user) {
    for (const prop in user) {
        const value = user[prop]
        if (typeof value === 'undefined' || !value.trim().length) throw Error(`${prop} cannot be undefined or empty`)
    }
}
app.post('/api/user', jsonBodyParser, (req, res) => {
    const { body: { name, surname, email, username, password } } = req

    Promise.resolve()
        .then(() => {
            validate({ name, surname, email, username, password })
            return User.findOne({ username })
        })
        .then(user => {
            if (user) throw Error('username already exists')
            const id = uuid()
            return User.create({ id, name, surname, email, username, password }).then(() => id)
        })
        .then(id => {
            res.json(success({ id }))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
})
app.put('/api/user/:id', jsonBodyParser, (req, res) => {
    const { body: { name, surname, email, username, password, newUsername, newPassword } } = req
    const { params: { id } } = req

    Promise.resolve()
        .then(() => {
            validate({ id, name, surname, email, username, password, newUsername, newPassword })
            return User.findOne({ username: newUsername })
        })
        .then(user => {
            if (user) throw Error('username already exists')
            return User.findOne({ id })
        })
        .then(user => {
            if (user.username !== username || user.password !== password) throw Error('username and/or password wrong')
            return User.findOneAndUpdate({ id }, { name, surname, email, username: newUsername, password: newPassword })
        })
        .then(() => {
            res.json(success())
        })
        .catch(err => {
            res.json(fail(err.message))
        })
})
app.delete('/api/user/:id', jsonBodyParser, (req, res) => {
    const { body: { username, password } } = req
    const { params: { id } } = req

    Promise.resolve()
        .then(() => {
            validate({ id, username, password })

            return User.findOne({ username })
        })
        .then(user => {
            if (!user) throw Error('user does not exist')
            if (user.id !== id) throw Error('user id does not match the one provided')
            if (user.username !== username || user.password !== password) throw Error('username and/or password wrong')
            return User.deleteOne({ id })
        })
        .then(() => {
            res.json(success())
        })
        .catch(err => {
            res.json(fail(err.message))
        })
})
app.get('/api/user/:id', (req, res) => {
    const { params: { id } } = req

    Promise.resolve()
        .then(() => {
            validate({ id })
            return User.findOne({ id }, { _id: 0, password: 0, __v: 0 })
        })
        .then(user => {
            if (!user) throw Error('user does not exist')
            res.json(success(user))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
})

app.listen(port, () => console.log(`users api running on port ${port}`))
