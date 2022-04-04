const express = require('express');
const router = express.Router()
const Cyclingitems = require('../models/cyclingModel')


//To get the cycling items
router.get("/", async (req, res) => {
    Cyclingitems.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router