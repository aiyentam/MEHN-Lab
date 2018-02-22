const express = require('express')
const router = express.Router()

const Link = require('../models/Link');

router.get("/", (req, res) => {
    Link.find({})
        .then(link => {
            res.render("link/index", { link })
        })
});

module.exports = router;