const {getAllProducts, createProduct, deleteProduct, updateProduct, createImageOnProduct, deleteImageOnProduct} = require('./products')
const {getAllCategories, createCategories, deleteCategories, upDateCategories } = require('./categories')
const { AuthenticationError } = require('apollo-server-express')

const needsAuth = resolver => {
    return async(parent, args, context) => {
        if(!context.user){
            throw new AuthenticationError('Needs Authentication')
            }
            return resolver(parent, args, context)
    }
    
}


const resolvers = {
    Query: {
        getAllProducts: needsAuth(getAllProducts),
        getAllCategories
    },
    Mutation:{
        createProduct,
        deleteProduct,
        updateProduct,
        createImageOnProduct,
        deleteImageOnProduct,
        createCategories,
        deleteCategories,
        upDateCategories
    }
    }
    module.exports = resolvers