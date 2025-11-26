import Button from "@/components/ui/Button";
import { useState, useRef } from "react";

const FeedbackForm = () => {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const nameRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		
        if (!form.name) {
            nameRef.current.focus();
            return;
        }

        if (!form.email.includes("@")) {
            emailRef.current.focus();
            return;
        }

        if (!form.message) {
            messageRef.current.focus();
            return;
        }

		console.log("Form submitted:", form);
	};

	return (
		<form className="p-4! flex flex-col gap-3 items-center" onSubmit={handleSubmit}>
			<input
				name="name"
				type="text"
				ref={nameRef}
				value={form.name}
				placeholder="Name"
				className="inputV1"
				onChange={handleChange}
			/>
			
			<input
				name="email"
				type="email"
				ref={emailRef}
				value={form.email}
				placeholder="Email"
				className="inputV1"
				onChange={handleChange}
			/>
			
			<textarea
				name="message"
				ref={messageRef}
				className="inputV1"
				value={form.message}
				onChange={handleChange}
				placeholder="Your message"
			/>

			<Button type="submit">Send Feedback</Button>
		</form>
	);
};

export default FeedbackForm;
