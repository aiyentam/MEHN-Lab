const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/hacker_links')

mongoose.Promise = Promise

module.exports = mongoose