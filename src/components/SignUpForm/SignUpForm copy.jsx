// SignUpForm.jsx
// backup copy of zeb's original way

import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { signUp } from "../../services/authService.js";
import { UserContext } from "../../contexts/UserContext";
import SelectAvatar from "../SelectAvatar/SelectAvatar.jsx";
import { FaEdit } from "react-icons/fa";

const SignUpForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    avatar: "",
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const { username, firstname, lastname, email, password, passwordConf } =
    formData;

  const handleChange = (evt) => {
    setMessage("");
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const newUser = await signUp(formData);
      setUser({ ...newUser, avatar: formData.avatar });
      navigate("/");
    } catch (err) {
      setMessage(err.message);
    }
  };

  const handleAvatarSelect = (selectedAvatar) => {
    setFormData((prev) => ({ ...prev, avatar: selectedAvatar }));
  };

  const isFormInvalid = () => {
    return !(username && password && password === passwordConf);
  };

  return (
    <main className="mainpage">
      <style>{"body{background: var(--pbg-grad)}"}</style>

      <p>{message}</p>
      {!formData.avatar ? (
        <>
          <h1 className="heading-no-bills">Select Avatar</h1>
          <SelectAvatar onSelect={handleAvatarSelect} />
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1 className="heading-no-bills">Create Account</h1>

          <img
            src={`/images/avatars/${formData.avatar}`}
            alt="Selected Avatar"
            style={{ width: "80px", borderRadius: "50%", marginBottom: "1rem" }}
          />


          <button
            type="button"
            onClick={() => setFormData({ ...formData, avatar: "" })}
          >
            Select Avatar <FaEdit />
          </button>

          <div className="white-form floating-content">
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={formData.username}
                name="username"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                value={formData.firstname}
                name="firstname"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                value={formData.lastname}
                name="lastname"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                name="email"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                name="password"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="confirm">Confirm Password</label>
              <input
                type="password"
                id="confirm"
                value={formData.passwordConf}
                name="passwordConf"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <button className="button-pink" disabled={isFormInvalid()}>
                Sign Up
              </button>
              <button className="button-pink" onClick={() => navigate("/")}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}
    </main>
  );
};

export default SignUpForm;
