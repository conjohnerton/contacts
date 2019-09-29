import axios from "axios";
const baseUrl = "/api/contacts";

const addOne = async (contactDetails) => {
	const response = axios.post(baseUrl, contactDetails);
	return response.data;
};

export default addOne;
