const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')

const app = express();

const hackerController = require('./controllers/link')
const userController = require('./controllers/user')

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride("_method"));

app.use(flash())

require('.config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use(function(req, res, next) {
    res.locals.currentUser = req.user
    next()
})

app.get('/', (req, res) => {
    res.render('index')
});

app.use('/links', hackerController);

app.listen(8080, () => console.log('test'));