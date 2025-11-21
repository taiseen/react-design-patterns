import { useRef } from "react";

const UncontrolledFeedbackForm = () => {
	const nameRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const message = messageRef.current.value;

		if (!name) {
			nameRef.current.focus();
			return;
		}

		if (!email.includes("@")) {
			emailRef.current.focus();
			return;
		}

		if (!message) {
			messageRef.current.focus();
			return;
		}

		console.log("Form submitted:", { name, email, message });
	};

	return (
		<form className="p-4! flex flex-col gap-3 items-center" onSubmit={handleSubmit}>
			<input className="inputV1" type="text" ref={nameRef} placeholder="Name" />

			<input
				className="inputV1"
				type="email"
				ref={emailRef}
				placeholder="Email"
			/>

			<textarea
				className="inputV1"
				ref={messageRef}
				placeholder="Your message"
			/>

			<button className="btnV1" type="submit">
				Send Feedback
			</button>
		</form>
	);
};

export default UncontrolledFeedbackForm;
