const express = require('express')

const app = express()

const staff = require('./staff.json')//const staff = JSON.parse(fs.readFileSync('staff.json','utf8'))
//console.log(staff)
app.get('/api/staff', (req, res) => {
    
    let query = req.query.q || req.query.query //let parsedUrl = url.parse(req.url, true)

    if (query) {
        const results = staff.filter(person => person.name.includes(query) || person.surname.includes(query) || person.email.includes(query) || person['github-username'].includes(query))
        res.json(results)
    } else {
        res.json(staff)
    }
})

const port = process.argv[2]
app.listen(port, () => console.log(`landing server running on port ${port}`))
