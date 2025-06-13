// src/components/EditProfile/EditProfile.jsx
// this is Zeb's original way

import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useParams } from "react-router";
import SelectAvatar from "../SelectAvatar/SelectAvatar.jsx";
import { useNavigate } from "react-router";
import { update } from "../../services/userService.js";
import { FaEdit } from "react-icons/fa";

const EditProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ ...user });
  const [message, setMessage] = useState("");
  const { userId } = useParams();
  const navigate = useNavigate();

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleAvatarSelect = (avatar) => {
    setFormData({ ...formData, avatar });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setMessage("");

    try {
      const updatedUser = await update(userId, formData);
      setUser(updatedUser);
      setMessage("Profile updated successfully!");
      navigate("/");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <main className="mainpage" style={{ padding: "0" }}>
      <style>{"body{background: var(--pbg-grad)}"}</style>

      <h2 className="heading-no-bills">Edit Profile</h2>
      <p className="message">{message}</p>

      {!formData.avatar ? (
        <>
          <h3 className="heading-no-bills">Select Avatar</h3>
          <SelectAvatar onSelect={handleAvatarSelect} />
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="floating-content flex-box">
            <button
              type="button"
              style={{
                background: "none",
                border: "none",
              }}
              onClick={() => setFormData({ ...formData, avatar: "" })}
            >
              <div className="avatar-box">
                <div className="avatar-parent">
                  <div className="avatar-circle"></div>

                  <img
                    src={`/images/avatars/${formData.avatar}`}
                    alt="Selected Avatar"
                    className="avatar-image"
                  />
                </div>
              </div>

              <p style={{ color: "white" }}>
                <FaEdit /> Change Avatar
              </p>
            </button>
          </div>

          <div className="white-form floating-content">
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="firstname">First Name:</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="lastname">Last Name:</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <button className="button-pink" type="submit">
              SAVE
            </button>
            <button className="button-pink" onClick={() => navigate("/")}>
              CANCEL
            </button>
          </div>
        </form>
      )}
    </main>
  );
};

export default EditProfile;
