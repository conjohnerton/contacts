import axios from "axios";
const baseUrl = "/api/contacts";

const deleteContact = async (id, authToken) => {
	const response = await axios.delete(`${baseUrl}/${id}`, {
		headers: {
			"x-auth-token": authToken
		}
	});

	return response.data;
};

export default deleteContact;
