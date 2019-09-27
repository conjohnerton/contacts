const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Contact = require("../../models/Contacts");
const User = require("../../models/User");

// @route   GET api/contacts
// @desc		Get all contacts from user
// @access  Public
router.get("/", auth, async (req, res) => {
	let contactsArr = [];

	await Contact.find({}).then((contacts) => {
		contacts.map((contact) => {
			contact.belongsTo &&
				contact.belongsTo.map((member) => {
					if (member.email == req.user.email) {
						contactsArr.push(contact);
					}
				});
		});
	});

	const OWNER = {
		id: req.user.id,
		email: req.user.email
	};

	await Contact.find({ OWNER })
		.then((contacts) => {
			let finalArr = [contactsArr];
			res.json(finalArr);
		})
		.catch((err) => console.log(err));

	/*
	Contact.find()
		.then(contacts => res.json(contacts));
			Contact.findById(req.params.id)
			.then
	*/
});

router.get("/search/:id", auth, (req, res) => {});

router.post("/", auth, (req, res) => {
	const OWNER = {
		id: req.user.id,
		name: req.user.name,
		email: req.user.email
	};

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
	Contact.findById(req.params.id, function(err, contact) {
		if (!contact) res.json({ success: false });
		else contact.name = req.body.name;
		contact.email = req.body.email;
		contact.address = req.body.address;
		contact.number = req.body.number;

		contact
			.save()
			.then((Contact) => {
				res.json("Contact Updated");
			})
			.catch((err) => {
				res.status(400).send("Update Not Possible");
			});
	});
});

module.exports = router;
