import { useState } from "react";

export default function Join({ handleJoin }) {
  const [formData, setFromData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleJoin(formData);
      }}
    >
      <h3 className="title">Create an Account</h3>
      <label>
        <input
          className="input"
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <input
          className="input"
          type="text"
          name="email"
          value={email}
          placeholder=" Email"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <input
          className="input"
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
        />
      </label>
      <br />
      <button className="join-btn">Join</button>
      <br />
    </form>
  );
}
