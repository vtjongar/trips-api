const mongoose = require('./model/tripModel')
const seeds = require('./tripsSeed.json')
const Trip = mongoose.model('tripModel')

// mongoose.Promise = Promise

Trip.remove({}).then(_ => {
    console.log('Dropped the DB')
    Trip.collection.insert(seeds).then(Trips => {
        console.log(seeds)
        mongoose.connection.close()
    })
    .catch(err => {
        console.log(err)
    })
})