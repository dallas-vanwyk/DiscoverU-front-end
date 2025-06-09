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
        
        <button onClick={() => navigate("/personality-test")}>
          Personality Test
        </button>
        
        <button onClick={() => navigate("/")}>
          Network
        </button>
        
        <button onClick={() => navigate("/city")}>
          Career Professions
        </button>
      </main>

      <NavBar />
    </div>
  );
};

export default HomePage;
