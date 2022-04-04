const mongoose = require('mongoose');

const reviewTemplate = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    rate: {
        type: String,
        required: true,
    },
    value:{
        type: Number,
        required: true
    },
    message:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Review', reviewTemplate)