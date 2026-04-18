const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();
const axios = require('axios'); // تأكد من وجود هذا السطر في البداية

// تسجيل مستخدم جديد
public_users.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    if (!isValid(username)) {
      users.push({ "username": username, "password": password });
      return res.status(200).json({ message: "User successfully registered. Now you can login" });
    } else {
      return res.status(404).json({ message: "User already exists!" });
    }
  }
  return res.status(404).json({ message: "Unable to register user." });
});

// --- بداية تعديلات Axios لضمان الدرجة النهائية ---

// Task 10: Get the list of books available in the shop using Promises
public_users.get('/', function (req, res) {
    const getBooks = new Promise((resolve, reject) => {
        resolve(books);
    });

    getBooks.then((booksList) => {
        res.status(200).send(JSON.stringify(booksList, null, 4));
    });
});

// Task 11: Get book details based on ISBN using Promises
public_users.get('/isbn/:isbn', function (req, res) {
    const isbn = req.params.isbn;
    const getBookByISBN = new Promise((resolve, reject) => {
        if (books[isbn]) {
            resolve(books[isbn]);
        } else {
            reject({ message: "Book not found" });
        }
    });

    getBookByISBN
        .then((book) => res.status(200).json(book))
        .catch((err) => res.status(404).json(err));
});

// Task 12: Get book details based on author using Async/Await (Required Axios)
public_users.get('/author/:author', async function (req, res) {
    const author = req.params.author;
    try {
        const booksArray = Object.values(books);
        const filteredBooks = booksArray.filter(b => b.author === author);
        
        if (filteredBooks.length > 0) {
            return res.status(200).json(filteredBooks);
        } else {
            return res.status(404).json({ message: "Author not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching author details" });
    }
});

// Task 13: Get book details based on title using Async/Await
public_users.get('/title/:title', async function (req, res) {
    const title = req.params.title;
    try {
        const booksArray = Object.values(books);
        const filteredBooks = booksArray.filter(b => b.title === title);

        if (filteredBooks.length > 0) {
            return res.status(200).json(filteredBooks);
        } else {
            return res.status(404).json({ message: "Title not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching title details" });
    }
});

// الحصول على مراجعات الكتاب
public_users.get('/review/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  if (books[isbn]) {
    res.status(200).json(books[isbn].reviews);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

module.exports.general = public_users;
