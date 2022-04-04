const express = require('express');
const router = express.Router()
const Post = require("../models/postModel")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "uploads")    
    },
    filename: (req, file, callback) => {
        callback(null, Date.now()+"--"+file.originalname);
    }
})

const upload = multer({ storage: storage });

router.post('/', upload.single("image"), async(req, res) => {
    const postImage = new Post({
        image: req.file.filename
    })
    try {
        await postImage.save();
        res.send("Inserted data")
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;