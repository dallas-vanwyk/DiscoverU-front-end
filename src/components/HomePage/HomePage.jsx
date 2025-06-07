// src/components/HomePage.jsx

import { useNavigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <main>
       {user?.avatar !== undefined && (
        <img
          src={`/images/avatars/${user.avatar}`}
          alt="User Avatar"
          style={{ width: "80px", borderRadius: "50%", marginBottom: "1rem" }}
        />
      )}
      <img src="images/main-app/home-page.svg" alt="Icon" />
      <br />
      <button onClick={() => navigate("/personality-test")}>
        Personality Test
      </button>
      <br />
      <button onClick={() => navigate("/")}>Network</button>
      <br />
      <button onClick={() => navigate("/city")}>Career Professions</button>
    </main>
  );
};

export default HomePage;
