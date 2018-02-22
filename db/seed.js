const Link = require('../models/Link')
const data = require('./seeds.json')

Link.remove({}).then(() => {
  return Link.collection.insert(data)
})
.then(() => {
  process.exit()
})
