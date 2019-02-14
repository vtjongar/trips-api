const mongoose = require('./model/tripModel')
const Trip = mongoose.model('Trip')

Trip.create(
    {
        place: 'Hollywood Blvd',
        review: {
          dateAttended: 'July 10th, 2018',
          favExperience: 'Seeing celebs',
          leastFav: 'Hot weather',
    
        }
      },

      {
        place: 'Las Vegas',
        review: {
          dateAttended: 'May 22, 2017',
          favExperience: 'Lotta crazy peeps',
          leastFav: 'Leaving to go home',
          
        }
      }
)

