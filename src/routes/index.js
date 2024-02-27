const productRoute = require('./product.route')
const cartRoute = require('./cart.route')

function router(app) {
  app.use('/api/v1/products', productRoute);
  app.use('/api/v1/carts', cartRoute);
}

module.exports = router;
