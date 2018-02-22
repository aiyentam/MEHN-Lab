const mongoose = require('../db/connection')
const LinkSchema = new mongoose.Schema({
  url: { type: String, required: true},
  title: { type: String, required: true},
  description: { type: String, required: true},
  upload_date: { type: String, required: true}
})

const Link = mongoose.model('Link', LinkSchema)

module.exports = Link
