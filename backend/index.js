const products = require('./products.json');
const productCategories = require('./products-categories.json')
const posts = require('./post.json');
const login = require('./login.json');
// Something more

module.exports = () => ({
  products: products,
  productCategories: productCategories,
  posts: posts,
  login: login
  // Something more
});