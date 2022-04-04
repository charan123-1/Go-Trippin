const express = require('express');
const router = express.Router()
const clothing = require('../models/clothingModel')


//To get the backpack collection
router.get("/", async (req, res) => {
    clothing.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router