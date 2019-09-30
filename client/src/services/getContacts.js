import axios from "axios";
const baseUrl = "/api/contacts";

const getContacts = async (authToken) => {
	const response = await axios.get(baseUrl, {
		headers: {
			"x-auth-token": authToken
		}
	});
	return response.data;
};

export default getContacts;
