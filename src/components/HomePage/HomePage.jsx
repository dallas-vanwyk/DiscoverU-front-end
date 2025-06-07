// src/components/HomePage.jsx

import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main className="homepage">
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
  );
};

export default HomePage;
