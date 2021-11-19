const express = require('express');
const morgan = require('morgan');
bodyParser = require('body-parser'),
  uuid = require('uuid');
const app = express();

app.use(bodyParser.json());

let myMovies = [
  {
    title: 'The Princess Bride',
    director: 'Rob Reiner',
    genre: 'Fantasy'
  },
  {
    title: 'Lord of the Rings: The Fellowship of the Ring',
    director: 'Peter Jackson',
    genre: 'Fantasy'
  },
  {
    title: 'Lord of the Rings: The Two Towers',
    director: 'Peter Jackson',
    genre: 'Fantasy'
  },
  {
    title: 'Dune',
    director: 'Denis Villeneuve',
    genre: 'Fantasy'
  },
  {
    title: 'Spirited Away',
    director: 'Hayao Miyazaki',
    genre: 'Fantasy'
  },
  {
    title: 'The Black Cauldron',
    director: 'Richard Rich',
    genre: 'Fantasy'
  },
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    director: 'Alfonso Cuaron',
    genre: 'Fantasy'
  },
  {
    title: 'Scott Pilgrim vs. The World',
    director: 'Edgar Wright',
    genre: 'Fantasy'
  },
  {
    title: 'Harry Potter and the Sorcerers Stone',
    director: 'Chris Columbus',
    genre: 'Fantasy'
  },
  {
    title: 'Harry Potter and The Order of the Phoenix',
    director: 'David Yates',
    genre: 'Fantasy'
  }
];

let users = [
  {
    username: 'PatrickDerrickson',
    email: 'haha@gmail.com'
  }
]

app.use(morgan('common'));
app.use(express.static('public'));

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to my favorite films!');
});

app.get('/documentation', (req, res) => {                  
  res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/movies', (req, res) => {
  res.json(myMovies);
});

app.get('/movies/:title', (req, res) => {
  const movie = myMovies.find((movie) => movie.title === req.params.title );
  res.json(movie);
});

app.get('/movies/:director', (req, res) => {
  const movie = myMovies.find((movie) => movie.director === req.params.director );
  res.json(movie);
});

app.get('/movies/:genre', (req, res) => {
  const movie = myMovies.find((movie) => movie.genre === req.params.genre );
  res.json(movie);
});

app.get('/users' , (req, res) => {
  res.send(users)
  });

app.post('/users' , (req, res) => {
  res.send(req.body)
  });

  app.put('/users/:username', (req, res) => {
    res.send(req.body)
  });

// Deletes a user from our list by username
app.delete('/users/:username', (req, res) => {
  res.send('User has been deleted.')
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});