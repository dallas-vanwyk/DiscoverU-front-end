// src/components/EditProfile/EditProfile.jsx
// backup copy of zeb's original way

import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useParams } from "react-router";
import SelectAvatar from "../SelectAvatar/SelectAvatar.jsx";
import { useNavigate } from "react-router";
import { update } from "../../services/userService.js";

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
    <main>
      <h2>Edit Profile</h2>
      <p>{message}</p>

      {!formData.avatar ? (
        <>
          <h3>Select an Avatar</h3>
          <SelectAvatar onSelect={handleAvatarSelect} />
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <img
            src={`/images/avatars/${formData.avatar}`}
            alt="Selected Avatar"
            style={{ width: "80px", borderRadius: "50%", marginBottom: "1rem" }}
          />
          <button
            type="button"
            onClick={() => setFormData({ ...formData, avatar: "" })}
          >
            Change Avatar
          </button>

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
          <br />

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
          <br />
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
          <br />
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
          <button type="submit">Save Changes</button>
        </form>
      )}
    </main>
  );
};

export default EditProfile;
