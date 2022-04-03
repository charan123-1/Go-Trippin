const mongoose = require('mongoose');

const todoTemplate = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Todo', todoTemplate)