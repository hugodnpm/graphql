const express = require('express')
const router = express.Router()
const categoriesController = require('../controllers/categoriesController')

router.delete('/:id', categoriesController.remove)
router.put('/:id', categoriesController.put)
router.post('/', categoriesController.create)
router.get('/', categoriesController.getAll)


module.exports = router