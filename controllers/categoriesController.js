const db = require('../db')
const Categories = require('../models/categories')(db)


const remove = async(req, res) => {
    await Categories.remove(req.params.id)
    res.send({
        success: true,        
    })
}

const put = async(req, res) => {

    const { category } = req.body
    await Categories.update(req.params.id, [category])
        res.send({
        success: true,        
    })
}
const create = async(req, res) => {
    const { category } = req.body
    await Categories.create([category])
    res.send({
        success: true,
        data: req.body
    })
}

const getAll = async(req, res) => {
    let category = null
    if(req.query.categoryId){
        await Categories.findAllByCategory(req.query.categoryId)
    }else{
        category = await Categories.findAll()
    }
    res.send({
        category
    })
}

module.exports = {
    remove,
    put, 
    create,
    getAll
    
}