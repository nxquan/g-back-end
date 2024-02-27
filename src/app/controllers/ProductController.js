
const Product = require('../models/Product');
const Util = require('../models/Util');

class ProductController {
  async getAllProducts(req, res, next) {
    try {
      const products = await Product.find();
      return res.status(200).json({data: products});
    } catch(err) {
      return res.status(500).json({error: error.errors});
    }
  }

  async getProductById(req, res, next) {
    try {
      const { id } = req.params;
      const product = await Product.findOne({id: id})

      return res.status(200).json({data: product});
    }catch(error) {
      return res.status(500).json({error: error.errors});
    }
  }

  async createProduct(req, res, next) {
    try {
      const data = req.body;

      // Store the total of products in util collection for query optimization
      const curIndex = await Util.findOne({name: 'product_index'});
      const newProduct = await Product.create({
        ...data,
        id: curIndex.value + 1
      });
      
      await Util.updateOne({name: 'product_index'}, {value: curIndex.value + 1});

      return res.status(201).json({data: newProduct});
    }catch(error) {
      return res.status(501).json({error: error.errors});
    }
  }

  async updateProductById(req, res, next) {
    try {
      const data = req.body;
      const product = await Product.findOne({id: req.params.id});

      if(product === null) {
        return res.status(404).json({error: 'Product not found'});
      }

      const updatedProduct = await Product.updateOne({id: req.params.id}, data);

      return res.status(201).json({message: 'Product updated'});
    }catch(error) {
      return res.status(501).json({error: error.errors});
    }
  }

  async deleteProductById(req, res, next) {
    try {
      const {id} = req.params;
      const product = await Product.findOne({id: id});

      if(product == null) {
        return res.status(404).json({error: 'Product not found'});
      }

      await Product.deleteOne({id: id});
      return res.status(200).json({message: 'Product deleted'});
    } catch (error) {
      return res.status(500).json({error: error.errors});
    }
  }
}


module.exports = new ProductController();