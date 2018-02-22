const mongoose = require('../db/connection')
const LinkSchema = new mongoose.Schema({
  url: String,
  title: String,
  description: String,
  upload_date: String
})

const Link = mongoose.model('Link', LinkSchema)

module.exports = Link
