const mongoose = require('mongoose');
const { Schema } = mongoose;

const Product = new Schema({
  id: {type: Number, required: true},
  name: {type: String, require: true},
  image: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  color: {type: String, required: true},
})

module.exports = mongoose.model('Product', Product);
