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
		await user.save();
		res.json({ success: true });
	} catch (exception) {
		res.json({ exception, success: false });
	}
});

router.delete("/:id", auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id);
		await Contact.deleteOne({ _id: req.params.id });

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
	const contact = new Contact({
		email: req.body.email,
		note: req.body.note,
		number: req.body.number
	});

	try {
		const updatedContact = await Contact.findByIdAndUpdate(
			req.params.id,
			contact
		);

		const user = await User.findById(req.user.id);
		user.contacts = user.contacts.filter(
			(contact) => contact != req.params.id
		);

		user.contacts.push(updatedContact);
		await user.save();
		res.json({ success: true });
	} catch (exception) {
		res.json({ success: false });
	}
});

module.exports = router;
