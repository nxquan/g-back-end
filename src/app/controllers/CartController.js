const Cart = require('../models/Cart');
const Product = require('../models/Product');

class CartController {
  async getCartByUserId(req, res){
    try {
      const { userId } = req.params;
      // Check if the user exists

      // Get the cart by userId
      const raws = await Cart.find({userId: userId});

      const  cartItems = await Promise.all(raws.map(async (item) => {
        const product = await Product.findOne({id: item.productId});
        return {
          ...item._doc,
          product: product
        }
      }));

      return res.status(200).json({data: cartItems});
    } catch (error) {
      return res.status(500).json({error: error.errors});
    }
  }

  async createCartItem(req, res) {
    try {
      const data = req.body;
      // Check user is exits

      // Check product is exits
      const product = await Product.findOne({id: data.productId});
      if(product == null) {
        return res.status(404).json({error: 'Product not found'});
      }

      const newCartItem = await Cart.create(data);
      return res.status(201).json({data: newCartItem});

    } catch (error) {
      return res.status(500).json({error: error.errors});
    }
  }

  async updateCartItemById(req, res) {
    try {
      const data = req.body;
      const cartItem = await Cart.findOne({_id: req.params.id});
      if(cartItem === null) {
        return res.status(404).json({error: 'Cart item not found'});
      }

      await Cart.updateOne({_id: req.params.id}, data);

      return res.status(201).json({message: 'Cart item updated'});
    }catch(error) {
      return res.status(500).json({error: error.errors});
    }
  }

  async deleteCartItemById(req, res) {
    try {
      const cartItem = await Cart.findOne({_id: req.params.id});

      if(cartItem === null) {
        return res.status(404).json({error: 'Cart item not found'});
      }

      await Cart.deleteOne({_id: req.params.id});

      return res.status(200).json({message: 'Cart item deleted'});
    }catch(error) {
      return res.status(500).json({error: error.errors})
    }
  }
}

module.exports = new CartController();