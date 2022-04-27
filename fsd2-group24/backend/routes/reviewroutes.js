const express = require('express');
const router = express.Router()
const Review = require('../models/reviewmodel')




//To add individual review.
router.post('/', async (request, response) => {
    const id = request.body.id
    const rate = request.body.rate
    const value = request.body.value
    const message = request.body.message

    const reviews = new Review({
        id: id,
        rate: rate,
        value: value,
        message: message
    })
    try {
        await reviews.save();
        response.send("Inserted data")
    } catch (err) {
        console.log(err)
    }
})


module.exports = router