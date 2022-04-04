const express = require('express');
const router = express.Router()
const HydMaps = require('../models/hydmapsModel')


//To get the Hyderabad maps collection
router.get("/", async (req, res) => {
    HydMaps.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router