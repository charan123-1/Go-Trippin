const express = require('express');
const router = express.Router()
const medicationItems = require('../models/medicationItemsModel')


//To get the medication Items collection
router.get("/", async (req, res) => {
    medicationItems.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router