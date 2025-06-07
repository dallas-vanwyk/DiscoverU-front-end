// src/components/HomePage.jsx

import { useNavigate } from "react-router";
import NavBar from "../NavBar/NavBar.jsx";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import TopNavBar from "../TopNavBar/TopNavBar.jsx";

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <>
      <TopNavBar />
      <main className="homepage">
        {user?.avatar !== undefined && (
          <img
            src={`/images/avatars/${user.avatar}`}
            alt="User Avatar"
            style={{ width: "80px", borderRadius: "50%", marginBottom: "1rem" }}
          />
        )}
        <img
          src="images/main-app/home-page-crop.png"
          alt="people discussing at table"
          className="floating-content homepage-image"
        />
        <button onClick={() => navigate("/personality-test")}>
          Personality Test
        </button>
        <button onClick={() => navigate("/")}>Network</button>
        <button onClick={() => navigate("/city")}>Career Professions</button>
      </main>
      <NavBar />
    </>
  );
};

export default HomePage;
