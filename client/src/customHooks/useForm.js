import { useState } from "react";

const useForm = (callback) => {
	const [values, setValues] = useState({});

	const handleSubmit = (event) => {
		event.preventDefault();
		setValues({});
		console.log(values);
		callback(event);
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
