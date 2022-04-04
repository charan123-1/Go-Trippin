const mongoose = require('mongoose');

const reviewTemplate = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Review', reviewTemplate)