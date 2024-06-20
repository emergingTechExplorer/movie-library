const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

// Here 'Author will be the name of the table inside the database
// authorSchema defines the table
module.exports = mongoose.model('Author', authorSchema)