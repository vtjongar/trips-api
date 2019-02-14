const mongoose = require('../connection')

const Schema = mongoose.Schema


const Trip = new Schema(

    {
        place: String,
        review: {
          dateAttended: String,
          favExperience: String,
          leastFav: String
    
        }
      }



)

mongoose.model('Trip', Trip)

module.exports = mongoose
