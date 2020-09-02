const jwt = require('jsonwebtoken')

const secret = 'hugosimoescarvalho'

const token = jwt.sign({
    user: {
        id: 1,
        name: 'Hugo'
    }
}, secret, { expiresIn: '2 days'})

try {
    jwt.verify(token, secret)
}catch (err) {
    console.log(err)
}


console.log(token)