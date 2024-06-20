const express = require('express');
const router = express.Router();
// this will give access to the author model
const Author = require('../models/author')

// All Authors Route
router.get('/', (req, res) => {
    res.render('authors/index');
})

// New Author Route
router.get('/new', (req, res) => {
    // the below author variables will be sent to ejs file
    // however this will not save anything to the database
    // but it will just create an Author to save, delete, update etc..
    res.render('authors/new', { author: new Author() });
})

// Create Author Route
router.post('/', (req, res) => {
    res.send(req.body.name);
})


module.exports = router;
