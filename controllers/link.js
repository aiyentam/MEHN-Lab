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
    var a = new Date ()
    var b = a.toDateString()
    res.render('links/new', {b})
  })

router.get('/edit/:id', (req, res) => {
    Link.findOne({_id: req.params.id}).then(link => {
        res.render('links/edit', link)
    })
})
router.put('/:id', (req, res) => {
    Link.findOneAndUpdate({ _id: req.params.id}, req.body, {new :true})
    .then(link => {
        res.redirect("/links")
    })
})
router.delete('/:id', (req, res) => {
    Link.findOneAndRemove({ _id: req.params.id }).then(() => {
        res.redirect("/links")
    })
})

router.get('/:id', (req, res) => {
    Link.findOne({ _id: req.params.id})
      .then(link => {
        res.render('links/show', link)
    })
})

module.exports = router;