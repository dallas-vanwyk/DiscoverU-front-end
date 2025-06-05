// SignUpForm.jsx

import { useContext, useState } from "react";
import { useNavigate } from "react-router";

import { signUp } from "../../services/authService.js";
import { UserContext } from "../../contexts/UserContext";

const SignUpForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    // avatar: "",
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const { username, firstname, lastname, email, password, passwordConf } = formData;

  const handleChange = (evt) => {
    setMessage("");
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const newUser = await signUp(formData);
      setUser(newUser);
      navigate("/");
    } catch (err) {
      setMessage(err.message);
    }
  };

  const isFormInvalid = () => {
    return !(username && password && password === passwordConf);
  };

  return (
    <main>
      <h1>Sign Up</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        {/* <div>
          <label htmlFor="avatar">Select Avatar</label>
          <input type="number" 
          id="avatar"
          value={avatar}
          name="avatar"
          onChange={handleChange}
          />
        </div> */}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={formData.username}
            name="username"
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <div>
          <label htmlFor="firstname">First Name:</label>
          <input type="text" 
          id="firstname"
          value={formData.firstname}
          name="firstname"
          onChange={handleChange}
          required
          />
        </div>
        <br />
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" 
          id="lastname"
          value={formData.lastname}
          name="lastname"
          onChange={handleChange}
          required
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
          required
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="confirm">Confirm Password:</label>
          <input
            type="password"
            id="confirm"
            value={formData.passwordConf}
            name="passwordConf"
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <button disabled={isFormInvalid()}>Sign Up</button>
          <button onClick={() => navigate("/")}>Cancel</button>
        </div>
      </form>
    </main>
  );
};

export default SignUpForm;
