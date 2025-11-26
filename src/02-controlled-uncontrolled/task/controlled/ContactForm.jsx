import Button from "@/components/ui/Button";
import { useState, useRef } from "react";

const DEFAULT_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  hobbies: "",
  address: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(DEFAULT_STATE);

  // Create a ref for each input we want to focus on validation failure
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const hobbiesRef = useRef();
  const addressRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Required fields + basic validation (in desired order)
    if (!formData.firstName.trim()) {
      firstNameRef.current?.focus();
      return;
    }

    if (!formData.lastName.trim()) {
      lastNameRef.current?.focus();
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      emailRef.current?.focus();
      return;
    }

    // Optional: more robust phone (allow empty or basic format)
    const phoneTrimmed = formData.phone.trim();
    if (phoneTrimmed && !/^[\d\s\-\+\(\)]+$/.test(phoneTrimmed)) {
      phoneRef.current?.focus();
      return;
    }

    if (!formData.address.trim()) {
      addressRef.current?.focus();
      return;
    }

    // If we get here → all good!
    console.log("Contact form submitted:", formData);

    // Optional: reset after successful submit
    // setFormData(DEFAULT_STATE);
  };

  const handleReset = () => {
    setFormData(DEFAULT_STATE);

    // focus first field after reset
    firstNameRef.current?.focus();
  };

  return (
    <form
      className="p-4 flex flex-col gap-3 items-center"
      onSubmit={handleSubmit}
      noValidate // prevents native browser validation tooltips
    >
      <input
        ref={firstNameRef}
        type="text"
        name="firstName"
        className="inputV1"
        placeholder="First Name *"
        value={formData.firstName}
        onChange={handleChange}
      />

      <input
        ref={lastNameRef}
        type="text"
        name="lastName"
        className="inputV1"
        placeholder="Last Name *"
        value={formData.lastName}
        onChange={handleChange}
      />

      <input
        ref={emailRef}
        type="email"
        name="email"
        className="inputV1"
        placeholder="Email *"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        ref={phoneRef}
        type="tel"
        name="phone"
        className="inputV1"
        placeholder="Phone (optional)"
        value={formData.phone}
        onChange={handleChange}
      />

      <input
        ref={hobbiesRef}
        type="text"
        name="hobbies"
        className="inputV1"
        placeholder="Hobbies (optional)"
        value={formData.hobbies}
        onChange={handleChange}
      />

      <textarea
        ref={addressRef}
        rows={4}
        name="address"
        placeholder="Address *"
        className="inputV1 resize-none"
        value={formData.address}
        onChange={handleChange}
      />

      <Button type="submit">Submit</Button>

      <Button type="reset" variant="ghost" onClick={handleReset}>
        Reset
      </Button>
    </form>
  );
};

export default ContactForm;
