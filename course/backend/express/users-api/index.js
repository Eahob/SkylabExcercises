const express = require('express')
const bodyParser = require('body-parser')
const app = express()

let userList = []//[{ username: 'admin', password: 'admin' }]

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(urlencodedParser)

app.post('/api/users', (req, res) => {
    let user = req.body.user
    let pass = req.body.pass

    function findUser() {
        for (let i = userList.length; i-- > 0;) {
            if (userList[i].username === user) {
                return undefined
            }
        }
        return true
    }

    function notOk(message, error) {
        const ko = { status: 'KO', message }
        if (error) ko.error = error
        return ko
    }

    switch (undefined) {
        case user:
            res.json(notOk('User registration failed.', 'No username'))
            break
        case findUser():
            res.json(notOk('User registration failed.', 'Username already exists.'))
            break
        case pass:
            res.json(notOk('User registration failed.', 'No password'))
            break
        default:
            userList.push({ username: user, password: pass })
            res.json({ status: 'OK', message: 'User registration succeeded.' })
    }
})

app.get('/api/users',(req, res) => {
    res.json(userList.map(({ username }) => ({ username })))
}) 

app.put('/api/users',(req, res) => {
    let user = req.body.user
    let pass = req.body.pass
    
}) 

app.delete('/api/users',(req, res) => {
    let user = req.body.user
    let pass = req.body.pass
}) 


const port = process.argv[2]
app.listen(port, () => console.log(`users-api server running on port ${port}`))
