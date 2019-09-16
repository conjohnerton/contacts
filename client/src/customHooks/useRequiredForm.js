import useForm from "./useForm";

const useRequiredForm = (callback) => {
	const { values, handleSubmit, handleChange } = useForm(callback);

	const handleVerifiedSubmit = (event) => {
		if (event) {
			event.preventDefault();
		}

		if (!values.password || !values.email) {
			alert("Please enter both an email and password.");
			return;
		}

		handleSubmit();
	};

	return {
		values,
		handleVerifiedSubmit,
		handleChange
	};
};

export default useRequiredForm;
