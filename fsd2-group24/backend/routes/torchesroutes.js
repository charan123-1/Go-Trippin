const express = require('express');
const router = express.Router()
const Flashtorches = require('../models/torchesModel')


//To get the flash torches
router.get("/", async (req, res) => {
    Flashtorches.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router