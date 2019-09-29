const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Contact = require("../../models/Contacts");
const User = require("../../models/User");

// @route   GET api/contacts
// @desc		Get all contacts from user
// @access  Public
router.get("/", auth, (req, res) => {
	User.findById(req.user.id)
		.populate("contacts")
		.then((user) => res.json(user))
		.catch((err) => res.json(err));
});

router.get("/search/:id", auth, (req, res) => {});

router.post("/", auth, async (req, res) => {
	const newContact = new Contact({
		name: req.body.name,
		note: req.body.note,
		number: req.body.number
	});

	try {
		// verify and get user, then save all details of new contact to user
		const user = await User.findById(req.user.id);
		const contact = await newContact.save();

		// push contact to user, save user, then return the thing
		user.contacts.push(contact.id);
		res.json({ success: true });
	} catch (exception) {
		res.json({ exception, success: false });
	}
});

router.delete("/:id", auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id);
		await Contact.findById(req.params.id).remove();

		// filter out deleted contact
		user.contacts = user.contacts.filter(
			(contact) => contact.id != req.params.id
		);

		await user.save();
		res.json({ success: true });
	} catch (exception) {
		res.json({ exception, success: false });
	}
});

router.put("/:id", auth, async (req, res) => {
	const contact = Contact.findById(req.params.id, function(err, contact) {
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
