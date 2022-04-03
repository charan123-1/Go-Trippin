const express = require('express');
const router = express.Router()
const Food = require('../models/foodModel')


//To get the food collection
router.get("/", async (req, res) => {
    Food.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router