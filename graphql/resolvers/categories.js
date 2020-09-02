const db = require('../../db')
const Categories = require('../../models/categories')(db)
const { ApolloError } = require('apollo-server-express')



const getAllCategories = async(parent, { filter }, context) =>{     
    let category = null
    if(filter && filter.categoryId){
        await Categories.findAllByCategory(filter.categoryId)
    }else{
        category = await Categories.findAll()
    }
    return category
}


const createCategories = async(context, {input}) => {
    const { category } = input
    await Categories.create([category])    
    return {
        category
    }
}

const deleteCategories = async(context, {id}) => {
    await Categories.remove(id)
    return true
}
const upDateCategories = async(parent, { id, input }, context)  => {
    const oldCategory = await Categories.findByPk(id)
    console.log(id, oldCategory)
    if(!oldCategory){
        throw new ApolloError('Category not found!')
        
    }
    if(input.category) {
        oldCategory.category = input.category
    }
    
    await Categories.update(id, [oldCategory.category])
    return oldCategory
}
module.exports = {
    getAllCategories,
    createCategories,
    deleteCategories,
    upDateCategories    
}