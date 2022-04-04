const express = require('express');
const router = express.Router()
const Surfingitems = require('../models/SurfingModel')


//To get the surfing items
router.get("/", async (req, res) => {
    Surfingitems.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router