const express = require('express');
const router = express.Router()
const productItems = require('../models/productItemsModel')


//To get the backpack collection
router.get("/", async (req, res) => {
    productItems.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})


module.exports = router