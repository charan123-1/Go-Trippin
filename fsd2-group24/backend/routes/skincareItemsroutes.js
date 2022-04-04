const express = require('express');
const router = express.Router()
const skincareItems = require('../models/skincareItemsModel')


//To get the backpack collection
router.get("/", async (req, res) => {
    skincareItems.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router