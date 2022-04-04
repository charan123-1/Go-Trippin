const express = require('express');
const router = express.Router()
const Trekkingitems = require('../models/trekkingModel')


//To get the trekking items
router.get("/", async (req, res) => {
    Trekkingitems.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router