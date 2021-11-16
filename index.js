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

app.get('/movies/:title', (req, res) => {
  res.json(myMovies.find((title) =>
    { return myMovies.title === req.params.title }));
});

app.get('/movies/:director', (req, res) => {
  res.json(myMovies.find((director) =>
    { return myMovies.director === req.params.director }));
});

app.get('/movies/:genre', (req, res) => {
  res.json(myMovies.find((genre) =>
    { return myMovies.genre === req.params.genre }));
});

app.post('/users', (req, res) => {
  let newUser = req.body;

  if (!newUser.name) {
    const message = 'Missing name in request body';
    res.status(400).send(message);
  } else {
    newUser.id = uuid.v4();
    users.push(newUser);
    res.status(201).send(newUser);
  }
});

// Deletes a user from our list by username
app.delete('/users/:username', (req, res) => {
  let user = users.find((user) => { return user.username === req.params.username });

  if (user) {
    user = users.filter((obj) => { return obj.username !== req.params.id });
    res.status(201).send('User ' + req.params.username + ' was deleted.');
  }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});