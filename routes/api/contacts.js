const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Contact = require("../../models/Contacts");
const User = require("../../models/User");

// @route   GET api/contacts
// @desc		Get all contacts from user
// @access  Public
router.get("/", auth, (req, res) => {
	let contactsArr = [];

	Contact.find({}).then((contacts) => {
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

	Contact.find({ OWNER })
		.then((contacts) => {
			let finalArr = [contactsArr];
			res.json(finalArr);
		})
		.catch((err) => console.log(err));
});

router.get("/search/:id", auth, (req, res) => {});

router.post("/", auth, (req, res) => {
	const OWNER = {
		id: req.user.id,
		email: req.user.email
	};

	const newContact = new Contact({
		name: req.body.name,
		note: req.body.note,
		number: req.body.number,
		belongsTo: [OWNER]
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
		if (!contact) return res.json({ err, success: false });

		contact.name = req.body.name;
		contact.email = req.body.email;
		contact.note = req.body.note;
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
