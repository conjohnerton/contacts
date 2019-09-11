import { useState } from "react";

const useForm = (callback) => {
	const [inputs, setInputs] = useState({});

	const handleSubmit = (event) => {
		// only stops reload if event exists
		if (event) {
			event.preventDefault();
		}
		callback();
	};

	// passes previous input in and only changes the input that was altered
	const handleChange = (event) => {
		event.persist();
		console.log(inputs);
		setInputs((inputs) => ({
			...inputs,
			[event.target.name]: event.target.value
		}));
	};

	return {
		handleSubmit,
		handleChange,
		inputs
	};
};

export default useForm;
