const express = require('express');
const router = express.Router()
const Review = require('../models/reviewModel')




//To add individual review.
router.post('/', async (request, response) => {
    const text = request.body.text
    const reviews = new Review({
        text: text
    })
    try {
        await reviews.save();
        response.send("Inserted data")
    } catch (err) {
        console.log(err)
    }
})


module.exports = router