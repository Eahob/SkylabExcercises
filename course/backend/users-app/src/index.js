const querystring = require('querystring')

require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const { MongoClient, ObjectId } = require('mongodb')


const formBodyParser = bodyParser.urlencoded({ extended: false })

const app = express()

let queryUrl = ''

app.use(express.static('public'))
app.set('view engine', 'pug')

MongoClient.connect('mongodb://localhost:27017/', (err, conn) => {
    if (err) throw err
    const db = conn.db('bootcamp')

    app.get('/', (req, res) => {
        const { name, surname, email, username, edit } = req.query
        let filterObject = {}
        if (name) filterObject.name = name
        if (surname) filterObject.surname = surname
        if (email) filterObject.email = email
        if (username) filterObject.username = username
        queryUrl = querystring.stringify(filterObject)
        db.collection('test').find(filterObject).toArray((err, data) => {
            if (err) throw err
            let userList = data.map(element => {
                element.edit = element._id == edit
                return element
            })
            res.render('index', { userList, queryUrl})
        })
    })

    app.get('/delete/:id', (req, res) => {
        const id = req.params.id
        db.collection('test').remove({ _id: ObjectId(id) })
        res.redirect('/')
    })

    app.post('/register', formBodyParser, (req, res) => {
        const { name, surname, email, username, password } = req.body

        if (name && surname && email && username && password ) {
            db.collection('test').find({$or:[{username},{email}]}).toArray((err, data) => {
                if (data.length) {
                    let message = 'Username or email already registered'
                    res.render('error',{ message})
                } else {
                    db.collection('test').insert({ name, surname, email, username, password })
                    .then(res.redirect('/'))
                }
            })
        } else {
            // invalid registration
            let message = 'Missing fields:'+ (username ? '' :' username ') + (name ? '' : ' name ') + (surname ? '' : ' surname ') + (email ? '' : ' email ') + (password ? '' : ' password ')
            res.render('error',{ message})
        }
    })
    app.post('/update', formBodyParser, (req, res) => {
        const { id, name, surname, email, username, curentPassword, newPassword } = req.body

        db.collection('test').find({ _id: ObjectId(id) }).toArray((err, data) => {
            if (curentPassword === data[0].password) {
                let setObject = { name, surname, email, username }
                if (newPassword) {
                    setObject.password = newPassword
                }
                db.collection('test').updateOne({ _id: ObjectId(id) }, { $set: setObject })
                res.redirect('/')
            } else {
                let message = 'Invalid password'
                res.render('error',{ message})
            }
        })
    })

    const port = process.env.PORT
    app.listen(port, () => console.log(`server running on port ${port}`))
    process.on('SIGINT', () => {
        console.log('\n Stopping server... \n')
        conn.close()//Closes connection to database
        process.exit()
    })
})
