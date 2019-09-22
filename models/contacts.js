const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url,  {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true } )
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const contactSchema = new mongoose.Schema({
  email: String,
  name: String,
  address: String,
  phone: String,
  id: Number
})

const Contact = mongoose.model('Contact', contactSchema)

// Safety precaution: format the objects returned by Mongoose 
contactSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// define public interface of the module 
module.exports = mongoose.model('Contact', contactSchema)

