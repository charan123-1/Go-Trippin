const express = require('express');
const router = express.Router()
const Swimmingitems = require('../models/swimmingModel')


//To get the swimming items
router.get("/", async (req, res) => {
    Swimmingitems.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router