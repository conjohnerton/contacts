const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
	email: String,
	name: String,
	address: String,
	phone: String
});

const Contact = mongoose.model("Contact", contactSchema);

// Safety precaution: format the objects returned by Mongoose
contactSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	}
});

// define public interface of the module
module.exports = mongoose.model("Contact", contactSchema);
