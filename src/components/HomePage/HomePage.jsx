// src/components/HomePage.jsx

import { useNavigate } from "react-router";
import NavBar from "../NavBar/NavBar.jsx";
import TopNavBar from "../TopNavBar/TopNavBar.jsx";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <style>{"body{background: var(--pbg-grad)}"}</style>

      <TopNavBar />

      <main className="mainpage">
        <img
          src="images/main-app/home-page-crop.png"
          alt="people discussing at table"
          className="floating-content homepage-image"
        />

        <div className="floating-content">
          <button
            className="button-white"
            onClick={() => navigate("/personality-test")}
            >
            Personality Test
          </button>

          <button
            className="button-white"
            onClick={() => navigate("/network")}
            >
            Network
          </button>

          <button
            className="button-white"
            onClick={() => navigate("/city")}
            >
            Career Professions
          </button>
        </div>

      </main>

      <NavBar />
    </div>
  );
};

export default HomePage;
