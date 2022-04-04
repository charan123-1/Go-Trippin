const mongoose = require('mongoose');

const postTemplate = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Post', postTemplate)