const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.set('views', './view');

const { listJokes } = require('./controller/joke');

app.get('/', listJokes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(PORT));
