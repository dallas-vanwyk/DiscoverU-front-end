// src/components/Dashboard/Dashboard.jsx

import { useEffect, useContext, useState } from "react";

import { UserContext } from "../../contexts/UserContext";

import * as userService from "../../services/userService";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await userService.index();
        setAllUsers(fetchedUsers);
        console.log(fetchedUsers);
      } catch (err) {
        console.log(err);
      }
    };
    if (user) fetchUsers();
  }, [user]);

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <h3>Current Users</h3>
      <ul>
        {allUsers.map((user) => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </main>
  );
};

export default Dashboard;
