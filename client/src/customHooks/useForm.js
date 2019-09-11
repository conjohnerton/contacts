import { useState } from "react";

const useForm = (callback) => {
	const [values, setValues] = useState({});

	const handleSubmit = (event) => {
		// only stops reload if event exists
		if (event) {
			event.preventDefault();
		}

		// use callback and reset values
		callback();
		setValues({});
	};

	// passes previous input in and only changes the input that was altered
	const handleChange = (event) => {
		event.persist();
		console.log(values);
		setValues((values) => ({
			...values,
			[event.target.name]: event.target.value
		}));
	};

	return {
		handleSubmit,
		handleChange,
		values
	};
};

export default useForm;
