const express = require('express');
const router = express.Router()
const ArakuMaps = require('../models/arakumapsModel')


//To get the Araku maps collection
router.get("/", async (req, res) => {
    ArakuMaps.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router