const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const app = express();

const hackerController = require('./controllers/link')

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride("_method"));

app.get('/', (req, res) => {
    res.render('index')
});

app.use('/links', hackerController);

app.listen(8080, () => console.log('test'));