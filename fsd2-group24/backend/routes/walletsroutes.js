const express = require('express');
const router = express.Router()
const Wallets = require('../models/walletsModel')


//To get the wallet items
router.get("/", async (req, res) => {
    Wallets.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router