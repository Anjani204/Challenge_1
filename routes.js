const express = require('express');
const router = express.Router();
const Book = require('./items');

//to get all books
router.get('/books', (req, res, next) => {
  db.items();
});

// Implement logic to create a new book
router.post('/books', (req, res, next) => {
    db.items.insertOne({book:"HarryPotter"});
});

// Implement logic to get a specific book by ID =3
router.get('/books/:id', (req, res, next) => {
    db.items.find({id:3})
});


router.put('/books/:id', (req, res, next) => {
  // Implement logic to update a specific book by ID
});


// Implement logic to delete a specific book by ID
router.delete('/books/:id', (req, res, next) => {
    db.items.delete({id:5});
});

module.exports = router;