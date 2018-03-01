require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const { MongoClient, ObjectId } = require('mongodb')


const formBodyParser = bodyParser.urlencoded({ extended: false })

const app = express()
app.use(express.static('public'))
app.set('view engine', 'pug')

MongoClient.connect('mongodb://localhost:27017/', (err, conn) => {
    if (err) throw err
    const db = conn.db('bootcamp')

    /*
    app.get('/', (req, res) => {
        res.render('form')
    })
    */
    app.get('/', (req, res) => {
        db.collection('test').find().toArray((err, data) => {
            if (err) throw err
            let userList = data.map(element => {
                let { name, surname, email, username,password } = element
                let id = element._id
                return { name, surname, email, username, password, id }
            })
            res.render('index', { userList })
        })
    })
    app.get('/delete/:id', (req, res) => {
        const id = req.params.id
        db.collection('test').remove({ _id: ObjectId(id) })
        res.redirect('/')
    })

    app.post('/register', formBodyParser, (req, res) => {
        const { name, surname, email, username, password } = req.body
        db.collection('test').insert({ name, surname, email, username, password })
            .then(res.redirect('/'))

    })
    app.post('/update', formBodyParser, (req, res) => {
        const { name, surname, email, username, password, id } = req.body
        db.collection('test').updateOne({ _id: ObjectId(id) }, { $set: { name, surname, email, username, password } })
        res.redirect('/')
    })

    const port = process.env.PORT
    app.listen(port, () => console.log(`server running on port ${port}`))
    process.on('SIGINT', () => {
        console.log('\n Stopping server... \n')
        conn.close()//Closes connection to database
        process.exit()
    })
})
