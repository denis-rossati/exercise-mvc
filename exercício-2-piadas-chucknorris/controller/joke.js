const axios = require('axios');
const { getByCategorie } = require('../model/joke');

const getJokeByCategorie = async (req, res) => {
  const { category } = req.params;
  const joke = await getByCategorie(category);
  res.render('jokes/index', { joke })
};

module.exports = {
  getJokeByCategorie,
}
