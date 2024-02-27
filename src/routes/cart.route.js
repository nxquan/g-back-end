const express = require('express')
const Router = express.Router();

const cartController = require('../app/controllers/CartController');


Router.get('/:userId', cartController.getCartByUserId);
Router.post('/', cartController.createCartItem);
Router.patch('/:id', cartController.updateCartItemById);
Router.delete('/:id', cartController.deleteCartItemById);

module.exports = Router;