const express = require('express')
const router = express.Router()
const products = require('./products')
const auth = require('./auth')
const categories = require('./categories')




router.use('/auth', auth)
router.use('/products', products)
router.use('/categories', categories)

module.exports = router