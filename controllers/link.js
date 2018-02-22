const express = require('express')
const router = express.Router()

const Link = require('../models/Link');

router.get("/", (req, res) => {
    Link.find({})
        .then(links => {
            res.render("links/index", { links })
        })
});

router.post('/', (req, res) => {
    Link.create({
        url: req.body.url,
        title: req.body.title,
        description: req.body.description,
        upload_date: req.body.upload_date
    }).then(place => {
        res.redirect('/links')
      })
})
router.get('/new', (req, res) => {
    res.render('links/new')
  })

router.get('/:id', (req, res) => {
    Link.findOne({ _id: req.params.id})
      .then(link => {
        res.render('links/show', link)
      })
  })

module.exports = router;