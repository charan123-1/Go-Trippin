const express = require('express');
const router = express.Router()
const Scubadivingitems = require('../models/scubadivingModel')


//To get the scubadiving items
router.get("/", async (req, res) => {
    Scubadivingitems.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router