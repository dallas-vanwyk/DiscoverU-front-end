// src/components/SignInForm/SignInForm.jsx

import { useState, useContext } from "react";
import { useNavigate } from "react-router";

import { signIn } from "../../services/authService.js";
import { UserContext } from "../../contexts/UserContext.jsx";

const SignInForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (evt) => {
    setMessage("");
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    // const isEmail = formData.username.includes('@');

    const payload = {
      username: formData.username,
      password: formData.password,
    };

    try {
      const signedInUser = await signIn(payload);
      setUser(signedInUser);
      navigate("/");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <main className="mainpage" style={{ padding: "0" }}>
      <style>{"body{background: var(--pbg-grad)}"}</style>

      <h1 className="heading-no-bills">Log In</h1>

      <img
        src="images/main-app/login.png"
        alt="people discussing at table"
        className="floating-content homepage-image"
      />

      <div>
        <p>{message}</p>

        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className="white-form floating-content"
        >
          <div>
            <label htmlFor="username">Email or Username</label>
            <input
              type="text"
              autoComplete="off"
              id="username"
              value={formData.username}
              name="username"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              autoComplete="off"
              id="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <button className="button-pink">NEXT</button>

            <button className="button-pink" onClick={() => navigate("/")}>
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignInForm;
