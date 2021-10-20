const { getCategories } = require("../model/categories")

const listCategories = async (_req, res) => {
  const categories = await getCategories();
  res.render('categories/index.ejs', { categories })
}

module.exports = {
  listCategories,
}