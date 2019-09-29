// This application works with the terminal commands!
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

password = process.argv[2]
const argLength = process.argv.length
//console.log(argLength)
// To compile: node mongo.js yourpassword "Arto Vihavainen" 040-1234556
console.log(argLength)

if (argLength <= 2 ) {

  console.log('To compile: node mongo.js <yourpassword> <"name"> <number> or node mongo.js <yourpassword>')
  process.exit(1)
}

// const url =
//   `mongodb+srv://fullstack:${password}@cluster0-bfddu.mongodb.net/phone_book?retryWrites=true&w=majority`

  const url =
  `mongodb+srv://fullstack:fullstack123@cluster0-bfddu.mongodb.net/phone_book?retryWrites=true&w=majority`

mongoose.connect(url,  {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true } )

const contactSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Contact = mongoose.model('Contact', contactSchema)

if (argLength == 5)
{  
  const name = process.argv[3]
  const num = process.argv[4]

  const contact = new Contact({
  name: name,
  number: num})

    // Saving the object to the database
  contact.save().then(response => {
  console.log('contact saved!')
  mongoose.connection.close() // closes database connection

})

}


else if (argLength == 3)
{
  // Returns all entries in the database

  Contact.find({}).then(result => {
    result.forEach(contact => {
      console.log(contact)
    })
    mongoose.connection.close()
  })
}
