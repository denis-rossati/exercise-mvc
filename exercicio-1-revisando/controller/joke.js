const jokeModel = require('../model/joke');

const listJokes = async (_req, res) => {
  const joke = await jokeModel.getJokes();
  res.render('jokeView.ejs', { joke });
}

module.exports = {
  listJokes,
}