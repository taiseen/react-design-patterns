import Button from "@/components/ui/Button";
import { useRef } from "react";

const ContactFormWithRef = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const hobbiesRef = useRef();
  const addressRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Grab values directly from DOM (fast + no state sync needed)
    const firstName = firstNameRef.current?.value.trim() || "";
    const lastName = lastNameRef.current?.value.trim() || "";
    const email = emailRef.current?.value.trim() || "";
    const phone = phoneRef.current?.value.trim() || "";
    const hobbies = hobbiesRef.current?.value.trim() || "";
    const address = addressRef.current?.value.trim() || "";

    // Validation in priority order → focus first invalid field
    if (!firstName) {
      firstNameRef.current?.focus();
      return;
    }
    if (!lastName) {
      lastNameRef.current?.focus();
      return;
    }
    if (!email || !email.includes("@") || !email.includes(".")) {
      emailRef.current?.focus();
      return;
    }
    // Optional: allow empty phone, but validate format if provided
    if (phone && !/^[\d\s\-\+\(\)]{6,}$/.test(phone)) {
      phoneRef.current?.focus();
      return;
    }
    if (!address) {
      addressRef.current?.focus();
      return;
    }

    // Success!
    const submittedData = {
      firstName,
      lastName,
      email,
      phone,
      hobbies,
      address,
    };
    console.log("Form submitted (uncontrolled):", submittedData);

    // auto-reset or show success UI
    handleReset();
  };

  const handleReset = () => {
    if (firstNameRef.current) firstNameRef.current.value = "";
    if (lastNameRef.current) lastNameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (phoneRef.current) phoneRef.current.value = "";
    if (hobbiesRef.current) hobbiesRef.current.value = "";
    if (addressRef.current) addressRef.current.value = "";

    // Put cursor back in first field after reset
    firstNameRef.current?.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 flex flex-col gap-3 items-center"
    >
      <input
        ref={firstNameRef}
        type="text"
        className="inputV1"
        defaultValue=""
        placeholder="First Name"
      />

      <input
        ref={lastNameRef}
        type="text"
        className="inputV1"
        defaultValue=""
        placeholder="Last Name"
      />

      <input
        ref={emailRef}
        type="email"
        className="inputV1"
        defaultValue=""
        placeholder="Email"
      />

      <input
        ref={phoneRef}
        type="tel"
        className="inputV1"
        defaultValue=""
        placeholder="Phone"
      />

      <input
        ref={hobbiesRef}
        type="text"
        className="inputV1"
        defaultValue=""
        placeholder="Hobbies"
      />

      <textarea
        ref={addressRef}
        className="inputV1"
        defaultValue=""
        placeholder="Address"
      />

      <Button type="submit">Submit</Button>

      <Button type="reset" variant="ghost" onClick={handleReset}>
        Reset
      </Button>
    </form>
  );
};

export default ContactFormWithRef;
