const jwt = require('jsonwebtoken')

const theSecret = 'a secret phrase'

const token = jwt.sign({ messege: 'Hello, World!' }, theSecret)

console.log(token)

const payload = jwt.verify(token, theSecret, { expiresIn: 1.5 }) //expiration in seconds

console.log(payload);

setTimeout(() => {
    const payload = jwt.verify(token, theSecret)
    
    console.log(payload)
}, 2000)