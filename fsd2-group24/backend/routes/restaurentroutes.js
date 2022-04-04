const express = require('express');
const router = express.Router()
const Restaurent = require('../models/restaurentModel')


//To get the restaurents.
router.get("/", async (req, res) => {
    Restaurent.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router