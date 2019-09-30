import axios from "axios";
const baseUrl = "/api/contacts";

const editContact = async (contact, authToken) => {
	const response = await axios.put(`${baseUrl}/${contact.id}`, contact, {
		headers: { "x-auth-token": authToken }
	});

	return response.data;
};

export default editContact;
