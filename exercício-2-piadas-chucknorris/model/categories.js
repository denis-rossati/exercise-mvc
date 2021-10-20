const axios = require('axios');

const getCategories = async () => axios.get('https://api.chucknorris.io/jokes/categories')
  .then((response) => response.data);

module.exports = {
  getCategories,
}
