const mongoose = require('mongoose');
const {Schema} = mongoose;

const Cart = new Schema({
  userId: {
    type: String,
    required: true
  },
  productId: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Cart', Cart);