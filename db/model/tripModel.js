const mongoose = require('../connection')

const Schema = mongoose.Schema


const Trip = new Schema(
    
    {
    area: String
})

mongoose.model('tripModel', Trip)

module.exports = mongoose