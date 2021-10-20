const axios = require('axios');

const getByCategorie = (category) => axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
  .then((response) => response.data)
  .then((data) => data.value);

module.exports = {
  getByCategorie
}
