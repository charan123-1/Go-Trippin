const express = require('express');
const router = express.Router()
const backpackItems = require('../models/backpackItemsModel')


//To get the backpack collection
router.get("/", async (req, res) => {
    backpackItems.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router