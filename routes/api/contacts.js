const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Contact = require("../../models/Contacts");
const User = require("../../models/User");

// @route   GET api/contacts
// @desc		Get all contacts from user
// @access  Public
router.get("/", auth, (req, res) => {
	/*
	try {
		// finds user and returns user data with contacts
		User.findById(req.user)
			.populate("Contact")
			.then((user) => res.json(userData));
	} catch (err) {
		res.json(err);
	}
	*/
	Contact.find()
		.then(contacts => res.json(contacts));
			Contact.findById(req.params.id)
			.then
  }
);

router.get("/search/:id", auth, (req, res) => {
	
})

router.post("/", auth, (req, res) => {
	const newContact = new Contact({
		name: req.body.name,
		email: req.body.email,
		address: req.body.address,
		phone: req.body.phone
	});
	newContact.save().then((contact) => res.json(contact));
});

router.delete("/:id", auth, (req, res) => {
	Contact.findById(req.params.id)
		.then((contact) =>
			contact.remove().then(() => res.json({ success: true }))
		)
		.catch((err) => res.status(404).json({ success: false }));
});

router.patch("/update/:id", auth, (req, res) => {
	
	let contactFields = [];

	contactFields.name = req.body.contactName;
	contactFields.email = req.body.contactEmail;
	contactFields.address = req.body.address;
	contactFields.phone = req.body.phone;

	Contact.findOneAndUpdate(
		{ id: req.body.id},
		{ $set: contactFields },
		{ new: true}
	)
	.then(contact => {
		res.json(contact);
	})
	.catch(err => console.log(err));

	/*
	Contact.findById(req.params.id, function(err, contact){
		if(!contact)
			res.json({success: false});
		else
			Contact.name = req.body.name;
			Contact.email = req.body.email;
			Contact.address = req.body.address;
			Contact.number = req.body.number;

			contact.save().then(Contact => {
				res.json('Contact Updated');
			})
			.catch(err => {
				res.status(400).send("Update Not Possible");
			});
	});
	*/
});

module.exports = router;
