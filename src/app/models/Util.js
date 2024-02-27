const mongoose = require('mongoose')
const { Schema } = mongoose;

const Util = new Schema({
  name: {type: String, required: true},
  value: {type: Number, required: true},
})

module.exports = mongoose.model('Util', Util);