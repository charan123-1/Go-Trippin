const express = require('express');
const router = express.Router()
const Chargeritems = require('../models/chargersModel')


//To get the charger items
router.get("/", async (req, res) => {
    Chargeritems.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router