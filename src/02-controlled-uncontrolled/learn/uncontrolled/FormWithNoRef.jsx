import Button from "@/components/ui/Button";

const FormWithNoRef = () => {
	const handleSubmit = (e) => {
		e.preventDefault();

		// Use FormData API to grab values directly
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData.entries());

		console.log("Form Data:", data);
		alert(`Hello - ${data.username},\nyour email is:- ${data.email}`);
	};

	return (
		<form
			className="p-4! flex flex-col gap-3 items-center"
			onSubmit={handleSubmit}
		>
			<input className="inputV1" name="username" placeholder="Username" />

			<input
				className="inputV1"
				name="email"
				type="email"
				placeholder="Email"
			/>

			<Button type="submit">Submit</Button>
		</form>
	);
};

export default FormWithNoRef;
