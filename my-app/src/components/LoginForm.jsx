import { useState } from "react";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [form, setForm] = useState({ name: "", email: "" });

  const handleOnSubmit = (event) => {
    // Hamishe as in halet default baray form estefadeh kon.
    event.preventDefault();
    setForm({ name, email });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h2>Form</h2>
      <div className="form-firstSec">
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Submit</button>
      </div>

      <div>
        <h2>Form Data</h2>
        <h4>Name: {form.name}</h4>
        <h4>Email: {form.email}</h4>
      </div>
    </form>
  );
};

export default LoginForm;
