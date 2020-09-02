const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')
const { needsAuth } = require('../utils/auth')




router.use(needsAuth)
router.delete('/:id', productsController.remove)
router.delete('/:productId/images/:id', productsController.removeImage)
router.patch('/:id', productsController.patch)
router.put('/:id', productsController.put)
router.post('/', productsController.create)
router.post('/:id/images', productsController.createImage)
router.get('/', productsController.getAll)
router.get('/:id', productsController.getById)

module.exports = router