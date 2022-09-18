const mongoose = require('mongoose')

const Schema = mongoose.Schema({
})
const project = mongoose.model('projects', Schema)

module.exports = project;