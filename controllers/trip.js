const express = require('express')
const router =  express.Router()
const mongoose = require('../db/model/tripModel')

const Trip = mongoose.model('Trip')

router.get('/', (req, res) => {
    console.log('find all is working')
    Trip.find({})
        .then(tripmodels => 
            res.json(tripmodels))
}) 


module.exports = router