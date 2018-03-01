require('dotenv').config()
const express = require('express')
const { MongoClient } = require('mongodb')

const app = express()

MongoClient.connect('mongodb://localhost:27017/', (err, conn) => {
    if (err) throw err
    const db = conn.db('bootcamp')
    app.get('/', (req, res) => {
        const query = req.query.q || req.query.query || ''
        const regex = new RegExp(query, 'i')//to ignore upper lower
        db.collection('staff').find({ name: regex, email: regex }).toArray((err, data) => {
            if (err) throw err
            res.json(data)
            //conn.close() //Closes connection to database
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
