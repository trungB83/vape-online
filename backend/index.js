const products = require('./products.json');
const posts = require('./post.json');
const login = require('./login.json');
// Something more

module.exports = () => ({
  products: products,
  posts: posts,
  login: login
  // Something more
});