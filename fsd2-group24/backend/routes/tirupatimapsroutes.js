const express = require('express');
const router = express.Router()
const TirupatiMaps = require('../models/tirupatimapsModel')


//To get the Tirupati maps collection
router.get("/", async (req, res) => {
    TirupatiMaps.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router