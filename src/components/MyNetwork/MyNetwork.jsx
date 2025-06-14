// src/components/MyNetwork/MyNetwork.jsx

import { useEffect, useState } from "react";
import { index } from "../../services/userService.js";
import NavBar from "../NavBar/NavBar.jsx";
import { Link } from "react-router";
import TopNavBar from "../TopNavBar/TopNavBar.jsx";
import NavTabs from "../NavTabs/NavTabs.jsx";
import "./MyNetwork.css";

const MyNetwork = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState();
  const [following, setFollowing] = useState({});

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await index();
        setUsers(data);
      } catch (error) {
        setMessage(error.message);
      }
    };
    getUsers();
  }, []);


  const handleFollow = (userId) => {
    setFollowing((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  return (
    <>
      <TopNavBar />

      <main className="network-page">
        <NavTabs />

        <div className="network-container">
          <h1>Network</h1>

          <ul className="network-list">
            {users.map((user) => (
              <li key={user._id} className="network-item">
                <img
                  src={`/images/avatars/${user.avatar}`}
                  alt={`${user.name}'s avatar`}
                  className="network-avatar"
                />
                <span className="network-name">{user.name}</span>
                <button
                  className={
                    following[user._id]
                      ? "unfollow-button follow-button"
                      : "follow-button"
                  }
                  onClick={() => handleFollow(user._id)}
                >
                  {following[user._id] ? "Unfollow" : "Follow"}
                </button>
              </li>
            ))}
          </ul>

          {message && <p style={{ color: "red" }}>{message}</p>}
        </div>
      </main>

      <NavBar />
    </>
  );
};

export default MyNetwork;