const express = require('express');
const router = express.Router();
// this will give access to the author model
const Author = require('../models/author')

// All Authors Route
router.get('/', async (req, res) => {
    // search for all the request parameters that we send 
    // and add them to the search options
    let searchOptions = {}
    // here we use req.query instead of req.body because a get request sends
    // information through the query string.
    // unlike post request sending through the body
    if (req.query.name != null && req.query.name !== '') {
        // regular expression will search part of the text inside of a 
        // field in the simplest case
        // 'i' will make sure it is case-insensitive
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        // if find() method is empty, it will get all the authors
        const authors = await Author.find(searchOptions)
        // send back the search request to the user so that
        // it will repopulate these fields for them
        res.render('authors/index', {
            authors: authors,
            searchOptions: req.query
        });

    } catch {
        res.redirect('/')
    }
})

// New Author Route
router.get('/new', (req, res) => {
    // the below author variables will be sent to ejs file
    // however this will not save anything to the database
    // but it will just create an Author to save, delete, update etc..
    res.render('authors/new', { author: new Author() });
})

// Create Author Route
router.post('/', async (req, res) => {
    const author = new Author({
        name: req.body.name
    })
    try {
        const newAuthor = await author.save()
        // res.redirect(`authors/${newAuthor.id}`)
        res.redirect('authors')
    } catch {
        res.render('authors/new', {
            author: author,
            errorMessage: 'Error creating Author'
        })
    }
})

module.exports = router;
