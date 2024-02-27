const express = require('express')
const Router = express.Router()
const productController = require('../app/controllers/ProductController')


Router.get('/:id', productController.getProductById)
Router.put('/:id', productController.updateProductById)
Router.delete('/:id', productController.deleteProductById)
Router.get('/', productController.getAllProducts)
Router.post('/', productController.createProduct)

module.exports = Router;
