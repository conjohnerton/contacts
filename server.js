// TODO: update path after establishing database
// TODO: rename to server.js

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

//const morgan = require('morgan')
const PORT = process.env.PORT || 3001;
const Contact = require("./models/contacts");

app.use(bodyParser.json());
//app.use(morgan('combined'))

app.use(cors());

const contacts = [];

const generateId = () => {
	const maxId = contacts.length > 0 ? contacts.length : 0;
	return maxId;
};

app.get("/api/persons", (req, res) => {
	Contact.find({}).then((contact) => {
		res.json(contact);
	});
});

app.get("/api/persons/:id", (req, res) => {
	Contact.findById(req.params.id).then((note) => {
		res.json(note.toJSON());
	});
});

app.delete("/api/persons/:id", (req, res, next) => {
	Contact.findByIdAndRemove(req.params.id)
		.then((result) => {
			res.status(204).end();
		})
		.catch((error) => next(error));
});

// TODO: update path after establishing database
app.post("/api/persons", (req, res) => {
	const body = req.body;

	// name not specified
	if (!body.name) {
		return res.status(400).json({
			error: "name missing"
		});
	}

	// number not specified
	if (!body.phone) {
		return res.status(400).json({
			error: "phone number missing"
		});
	}

	// email not specified
	if (!body.email) {
		return res.status(400).json({
			error: "email missing"
		});
	}

	// address not specified
	if (!body.address) {
		return res.status(400).json({
			error: "address missing"
		});
	}

	// name is already present in list
	if (contacts.find((contact) => contact.name === body.name)) {
		return res.status(400).json({
			error: "Repeated entry"
		});
	}

	const contact_id = generateId();
	console.log(Number(contact_id));

	const contact = new Contact({
		email: body.email,
		name: body.name,
		address: body.address,
		phone: body.phone,
		id: Number(contact_id)
	});

	contact.save().then((savedContact) => {
		res.json(savedContact.toJSON());
	});

	//contacts = contacts.concat(contact)
	contacts.push(contact);
	console.log(contacts.length);
	console.log(contacts);
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
