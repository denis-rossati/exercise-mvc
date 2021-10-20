const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.set('views', './views');

const { listCategories } = require('./controller/categories');

const { getJokeByCategorie } = require('./controller/joke');

app.get('/jokes/:category', getJokeByCategorie);

app.get('/categories', listCategories);

app.get('/', (_req, res) => res.redirect('/categories'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(PORT));
