const mongoose = require('mongoose')

const Schema = mongoose.Schema({
})
const basicInfo = mongoose.model('basic-info', Schema)

module.exports = basicInfo;