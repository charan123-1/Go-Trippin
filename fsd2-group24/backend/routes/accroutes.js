const express = require('express');
const router = express.Router()
const Accommodation = require('../models/accomodationModel')


//To get the accommodation collection
router.get("/", async (req, res) => {
    Accommodation.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router