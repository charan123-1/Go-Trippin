const express = require('express');
const router = express.Router()
const surfingitems = require('../models/surfingModel')


//To get the surfing items
router.get("/", async (req, res) => {
    surfingitems.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router