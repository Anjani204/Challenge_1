const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  publishDate: Date,
});

const Book = mongoose.model('items', bookSchema);

module.exports = Book;