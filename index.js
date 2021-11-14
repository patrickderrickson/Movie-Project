const express = require('express');
const morgan = require('morgan');
const app = express();

let myMovies = [
  {
    title: 'The Princess Bride',
    director: 'Rob Reiner'
  },
  {
    title: 'Lord of the Rings: The Fellowship of the Ring',
    director: 'Peter Jackson'
  },
  {
    title: 'Lord of the Rings: The Two Towers',
    director: 'Peter Jackson'
  },
  {
    title: 'Dune',
    director: 'Denis Villeneuve'
  },
  {
    title: 'Spirited Away',
    director: 'Hayao Miyazaki'
  },
  {
    title: 'The Black Cauldron',
    director: 'Richard Rich'
  },
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    director: 'Alfonso Cuaron'
  },
  {
    title: 'Scott Pilgrim vs. The World',
    director: 'Edgar Wright'
  },
  {
    title: 'Harry Potter and the Sorcerers Stone',
    director: 'Chris Columbus'
  },
  {
    title: 'Harry Potter and The Order of the Phoenix',
    director: 'David Yates'
  }
];

app.use(morgan('common'));
app.use(express.static('public'));

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to my favorite fantasy films!');
});

app.get('/documentation', (req, res) => {                  
  res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/movies', (req, res) => {
  res.json(myMovies);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});