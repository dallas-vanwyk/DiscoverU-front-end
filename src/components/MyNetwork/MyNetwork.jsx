// src/components/MyNetwork/MyNetwork.jsx

import { useEffect, useState } from "react";
import { index } from "../../services/userService.js"

const MyNetwork = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState();
    const [following, setFollowing] = useState({});
// custom effect for fetching all users for this page specifically
    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await index();
                console.log('users:', data[0]);
                setUsers(data);
            } catch (error) {
                setMessage(error.message)
            }
    }
    getUsers();
}, []);

const handleFollow = (userId) => {
    setFollowing((prev) => ({
        ...prev, [userId]: !prev[userId], // this should toggle the follow and unfollow button locally for now. Will return to at a later date and make it not local so user can always see who is followed and unfollowed
    }));
}

// Some simple styling for testing purposes, Can be used in a separate CSS file later if wanted I just used Chatgpt to generate some basic styling so I can view the page easier. When I first got it functional, the avatars were giant and the text was very small. 

 const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px", // space between avatar and name
    padding: "8px",
    borderRadius: "6px",
    cursor: "default",
  };

  const listItemHoverStyle = {
    backgroundColor: "#f0f0f0",
  };

  const imgStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  const nameStyle = {
    fontSize: "16px",
    fontWeight: 500,
  };

  const buttonStyle = {
    marginLeft: "auto",  // push button to right side
    padding: "6px 12px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #007bff",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  };

  const buttonUnfollowStyle = {
    ...buttonStyle,
    backgroundColor: "#ccc",
    borderColor: "#999",
    color: "#333",
  };



return (
    <div>
        <h1>Network</h1>
         <ul style={listStyle}>
        {users.map((user) => (
          <li key={user._id} style={listItemStyle}>
            <img
              src={`/images/avatars/${user.avatar}`}
              alt={`${user.name}'s avatar`}
              style={imgStyle}
            />
            <span style={nameStyle}>{user.name}</span>
            <button
              style={following[user._id] ? buttonUnfollowStyle : buttonStyle}
              onClick={() => handleFollow(user._id)}
            >
              {following[user._id] ? "Unfollow" : "Follow"}
            </button>
          </li>
        ))}
      </ul>
      {message && <p style={{ color: "red" }}>{message}</p>}
    </div>

)
}


export default MyNetwork;