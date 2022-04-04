const express = require('express');
const router = express.Router()
const Skydivingitems = require('../models/skydivingModel')


//To get the skyiving items
router.get("/", async (req, res) => {
    Skydivingitems.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router