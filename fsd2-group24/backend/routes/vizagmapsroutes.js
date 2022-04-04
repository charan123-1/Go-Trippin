const express = require('express');
const router = express.Router()
const VizagMaps = require('../models/vizagmapsModel')


//To get the Vizag maps collection
router.get("/", async (req, res) => {
    VizagMaps.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router