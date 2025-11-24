const ContactFormNoRef = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      hobbies: formData.get("hobbies"),
      address: formData.get("address"),
    };

    // ⚠️ Validation uses extracted values
    if (!data.email.includes("@")) {
      alert("Invalid email");
      return;
    }

    console.log("Submitted (FormData):", data);
  };

  const handleReset = (e) => {
    e.target.closest("form").reset(); // need manual DOM access
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4! flex flex-col gap-3 items-center"
    >
      <input className="inputV1" name="firstName" placeholder="First Name" />
      <input className="inputV1" name="lastName" placeholder="Last Name" />
      <input className="inputV1" name="email" placeholder="Email" />
      <input className="inputV1" name="phone" placeholder="Phone" />
      <input className="inputV1" name="hobbies" placeholder="Hobbies" />
      <textarea className="inputV1" name="address" placeholder="Address" />
      
      <button className="btnV1" type="submit">
        Submit
      </button>

      <button className="btnV1" type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default ContactFormNoRef;
