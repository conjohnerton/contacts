const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//const morgan = require('morgan')
app.use(bodyParser.json())
//app.use(morgan('combined'))
const cors = require('cors')
app.use(cors())
const PORT = process.env.PORT || 3001

var today = new Date()
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
var dateTime = date+' '+time;

let contacts = 
[
	{
		name: "Ron Weasley", 
		number: "123456789",
		id: 1

	},

	{
		name: "Natsu Dragneel", 
		number: "7859375609",
		id: 2

	},

	{
		name: "Deku", 
		number: "452950785",
		id: 3

	},

	{
		name: "Blair Waldorf", 
		number: "4543218756",
		id: 4

	}

]

const generateId = () => {
  const maxId = contacts.length > 0? Math.max(...contacts.map(n => n.id)): 0
  return maxId}

const generateNum = () =>{
	const num = Math.floor(Math.random() * (9999999999 + 1))
}

app.get('/api/persons', (req, res) => {
  res.json(contacts)
})

var id = generateId()
var stringy = "The phonebook has " + id + " contacts\n"

app.get('/info', (req, res) => {
	res.write(stringy)
	res.write(dateTime)
	res.end()
})

app.get('/api/persons/:id', (req, res) => {
	const id = Number(req.params.id)
	//console.log(id)
	const contact = contacts.find(contact => contact.id === id)

	if (contact)
	{
		res.send(contact) 
	}

	else
	{
		res.status(404).end()
	}
	
})

app.delete('/api/persons/:id', (req, res) => 
{

	const id = Number(req.params.id)
	contacts = contacts.filter(contact => contact.id !== id)
	res.status(204).end()
	

})

app.post('/api/persons', (req, res) => {

	const body = req.body
	//console.log(newContact)

	// name not specified 
	  if (!body.name) {
	  	//console.log("uglybutt")
    return response.status(400).json({ 
      error: 'name missing' 
    })
  }

  // number not specified 
  	  if (!body.number) {
  	  	//console.log("uglybutt2")
    return response.status(400).json({ 
      error: 'number missing' 
    })
  }

  // name is already present in list 
  if (contacts.find(contact => contact.name === body.name) )
  {
  	 return response.status(400).json({ 
      error: 'Repeated entry' 
    })
  }

	const contact = {
    name: body.name,
    number: body.number,
    id: generateId() + 1
  }

 contacts = contacts.concat(contact)

 res.json(contact)

})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})