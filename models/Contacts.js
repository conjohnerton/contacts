const mongoose = require("mongoose");

// Create Schema
const contactSchema = new mongoose.Schema({
	name: {
		type: String
	},
	email: {
		type: String
	},
	address: {
		type: String
	},
	number: {
		type: String
	},
	belongsTo: [
		{
			email: {
				type: String
			},
			name: {
				type: String
			}
		}
	],

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
