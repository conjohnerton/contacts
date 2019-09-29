import axios from "axios";
const baseUrl = "/api/contacts";

const addOne = async (contactDetails, authToken) => {
	const response = await axios.post(baseUrl, contactDetails, {
		"x-auth-token": authToken
	});
	return response.data;
};

export default addOne;
