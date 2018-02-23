var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require("passport");

// GET /
router.get('/', (req, res) => {
  res.render('index')
})

// GET /signup
router.get('/signup', (req, res) => {
  res.render('signup', {message: req.flash('signupMessage')}) 
})

// POST /signup
router.post('/signup', (req, res) => {
  var signupStrategy = passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
  });
  return signupStrategy(req, res);
})

// GET /login
router.get('/login', (req, res) => {
  res.render('login', {message: req.flash('loginMessage')})
})

// POST /login /form
router.post('/login', (req, res) => {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
  return loginProperty(req, res)
})

// GET /logout
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

// Restricted (cool people only!)
router.get('/secret', (req, res) => {
  if(req.isAuthenicated()) res.render('secret')
  res.redirect('/')
})

module.exports = router
