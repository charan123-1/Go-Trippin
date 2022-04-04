const express = require('express');
const router = express.Router()
const WglMaps = require('../models/wglmapsModel')


//To get the Warangal maps collection
router.get("/", async (req, res) => {
    WglMaps.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router