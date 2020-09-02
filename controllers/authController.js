const jwt = require('jsonwebtoken')

const secret = 'hugosimoescarvalho'



const USERS = {
    'hugosc@gmail.com': '123456'
}

const auth = async(req, res) => {
    const {user, passwd } = req.body

    // TODO: checar no banco de dados
    if(USERS[user] && USERS[user] === passwd){
        const token = jwt.sign({
            user
            }
        , secret, { expiresIn: '2 days'})
        return res.send({
            success: true,
            token        
        })
    }
    console.log(user, passwd)
    res.send({
        success: false,
        menssage: ' wrong credentials'        
    })
}



module.exports = {
    auth
}