// src/components/SelectAvatar/SelectAvatar.jsx

import { useState } from "react";
import { FaEdit } from "react-icons/fa";

const avatarFiles = [
  "avatar1.svg",
  "avatar2.svg",
  "avatar3.svg",
  "avatar4.svg",
  "avatar5.svg",
  "avatar6.svg",
  "avatar7.svg",
  "avatar8.svg",
  "avatar9.svg",
  "avatar10.svg",
  "avatar11.svg",
  "avatar12.svg",
];

const SelectAvatar = ({ onSelect }) => {
  const [avatar, setAvatar] = useState(null);

  const handleSelection = (filename) => {
    setAvatar(filename);
    onSelect(filename);
  };

  return (
    <div>
      {/* if initial page load or avatar has been selected */}
      <img
        // src={`/images/avatars/${formData.avatar}`}
        alt="Selected Avatar"
        style={{ width: "80px", borderRadius: "50%", marginBottom: "1rem" }}
      />

      <button
        type="button"
        onClick={() => setFormData({ ...formData, avatar: "" })}
      >
        Select Avatar <FaEdit />
      </button>

      {/* if in avatar selection mode */}

      <h1 className="heading-no-bills">Select Avatar</h1>
      <div style={styles.grid}>
        {avatarFiles.map((filename) => {
          const isSelected = avatar === filename;
          return (
            <img
              key={filename}
              src={`/images/avatars/${filename}`}
              alt={filename}
              onClick={() => handleSelection(filename)}
              style={{
                ...styles.avatar,
                border: isSelected
                  ? "3px solid #4f46e5"
                  : "2px solid transparent",
                transform: isSelected ? "scale(1.1)" : "scale(1)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

// Simple styling object
const styles = {
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    padding: "20px",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
};

export default SelectAvatar;
