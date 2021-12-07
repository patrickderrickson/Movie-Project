const mongoose = require('mongoose');

let movieSchema = mongoose.Schema({
    Title: {type: String, required: true},
    Description: {type: String, required: true},
    Genre: {
      Name: String,
      Description: String
    },
    Director: {
      Name: String,
      Bio: String,
      Birth: String,
      Death: String
    },
    ImagePath: String,
    Featured: Boolean
  });

  let directorSchema = mongoose.Schema({
    Name: {type: String, required: true},
    Bio: {type: String, required: true},
    Birth: {type: String, required: true},
    Death: {type: String, required: true},
  });

  let genreSchema = mongoose.Schema({
    Name: {type: String, required: true},
    Description: {type: String, required: true},
  });

  let userSchema = mongoose.Schema({
    Username: {type: String, required: true},
    Password: {type: String, required: true},
    Email: {type: String, required: true},
    Birthday: Date,
    FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'movies' }]
  });
  
  let movies = mongoose.model('movies', movieSchema);
  let directors = mongoose.model('directors', directorSchema);
  let genres = mongoose.model('genres', genreSchema);
  let users = mongoose.model('users', userSchema);
  
  module.exports.movies = movies;
  module.exports.users = users;
  module.exports.directors = directors;
  module.exports.genres = genres;