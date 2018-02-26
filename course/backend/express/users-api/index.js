const express = require('express')
const bodyParser = require('body-parser')
const app = express()

let userList = []

const urlencodedParser = bodyParser.urlencoded({ extended: false })

function findUserByUsername(username, option) {
    for (let i = userList.length; i-- > 0;) {
        if (userList[i].username === username) {
            return option >= 0 ? (option ? userList[i] : i ) : option
        }
    }
    return !(option >= 0)
}

function ok(message) {
    return { status: 'OK', message: `${message} succeeded` }
}

function notOk(message, error) {
    const ko = { status: 'KO', message: `${message} failed` }
    if (error) ko.error = error
    return ko
}

app.use(urlencodedParser)

app.post('/api/users', (req, res) => {
    const whatTheUserIsDoing = 'User registration'
    let user = req.body.user
    let pass = req.body.pass

    switch (undefined) {
        case user:
            res.json(notOk(whatTheUserIsDoing, 'No username'))
            break
        case findUserByUsername(user):
            res.json(notOk(whatTheUserIsDoing, 'Username already exists.'))
            break
        case pass:
            res.json(notOk(whatTheUserIsDoing, 'No password'))
            break
        default:
            userList.push({ username: user, password: pass })
            res.json(ok(whatTheUserIsDoing))
    }
})

app.get('/api/users', (req, res) => {
    res.json(userList.map(({ username }) => ({ username })))
})
app.get('/api/users/:username', function (req, res) {
    const username = req.params.username
    //const {username} = req.params
    //const {params: {username}} = req
    res.send('User id is ' + username)
})
app.put('/api/users', (req, res) => {
    const whatTheUserIsDoing = 'Change password'
    let user = req.body.user
    let pass = req.body.pass
    let newPass = req.body.newPass
    let foundUser = findUserByUsername(user, true)
    if (foundUser) {
        if (foundUser.password === pass) {
            foundUser.password = newPass
            res.json(ok(whatTheUserIsDoing))
        } else {
            res.json(notOk(whatTheUserIsDoing, 'Wrong password'))
        }
    } else {
        res.json(notOk(whatTheUserIsDoing, 'Wrong username'))
    }
})

app.delete('/api/users', (req, res) => {
    const whatTheUserIsDoing = 'User deletion'
    let user = req.body.user
    let pass = req.body.pass
    let index = findUserByUsername(user, false)
    if (index) {
        if (userList[index].password === pass) {
            userList.splice(index, 1)
            res.json(ok(whatTheUserIsDoing))
        } else {
            res.json(notOk(whatTheUserIsDoing, 'Wrong password'))
        }
    } else {
        res.json(notOk(whatTheUserIsDoing, 'Wrong username'))
    }
})


const port = process.argv[2]
app.listen(port, () => console.log(`users-api server running on port ${port}`))
