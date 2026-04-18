
const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

// Task 10: Get all books using Async/Await
public_users.get('/', async function (req, res) {
  try {
    const getAllBooks = () => Promise.resolve(books);
    const result = await getAllBooks();
    res.status(200).send(JSON.stringify(result, null, 4));
  } catch (err) {
    res.status(500).json({message: "Error retrieving books"});
  }
});

// Task 11: Get book details based on ISBN using Promises
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  const getBookByISBN = new Promise((resolve, reject) => {
    if (books[isbn]) resolve(books[isbn]);
    else reject("Book not found");
  });

  getBookByISBN
    .then((book) => res.status(200).send(JSON.stringify(book, null, 4)))
    .catch((err) => res.status(404).json({message: err}));
});

// Task 12: Get book details based on author using Promises
public_users.get('/author/:author', function (req, res) {
  const author = req.params.author;
  new Promise((resolve) => {
    let filtered = Object.values(books).filter(b => b.author === author);
    resolve(filtered);
  }).then(result => res.status(200).send(JSON.stringify(result, null, 4)));
});

// Task 13: Get all books based on title
public_users.get('/title/:title', function (req, res) {
  const title = req.params.title;
  new Promise((resolve) => {
    let filtered = Object.values(books).filter(b => b.title === title);
    resolve(filtered);
  }).then(result => res.status(200).send(JSON.stringify(result, null, 4)));
});

// Task 5: Get book review
public_users.get('/review/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  if (books[isbn]) res.status(200).send(JSON.stringify(books[isbn].reviews, null, 4));
  else res.status(404).json({message: "Book not found"});
});

module.exports.general = public_users;
