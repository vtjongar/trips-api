const express = require('express')
const parser = require('body-parser')
const cors = require('cors')



const app = express()

// app.set('port', process.env.PORT || 1776)
// app.use(parser.json())
app.use(cors())
app.use(express.static('client/build'))

const tripController = require('./controllers/trip')
app.use('/', tripController)


// app.get('/', (req, res) => {
//   res.json({})
// })

// app.listen(app.get('port'), () => {
//   console.log('Server listening on port ' + app.get('port'))
// })
app.listen(1776, () => {
  console.log(' are listening on port 3001')
})