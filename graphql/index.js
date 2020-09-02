const { ApolloServer, gql } = require('apollo-server-express')
const fs = require('fs')
const path = require('path')
const schema = fs.readFileSync(path.join(__dirname, 'schema.graphql') )
const resolvers = require('./resolvers')
const jwt = require('jsonwebtoken')

const typeDefs = gql`${schema}`

const graphqlServer = new ApolloServer({
typeDefs,
resolvers, 
context: ({ req }) => {
    if(req.headers && req.headers.authorization) {
        const header = req.headers.authorization
        const headerParts = header.split(' ')
        const secret = 'hugosimoescarvalho'
        try {
            const payload = jwt.verify(headerParts[1], secret)
            return { user: payload.user }              
        }catch(err){ }
    }
    return {        
    }
}
})

module.exports = graphqlServer