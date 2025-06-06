// src/components/HomePage.jsx

import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <img src="images/main-app/home-page.svg" alt="Icon" />
      <br />
      <button onClick={() => navigate("/personality-test")}>
        Personality Test
      </button>
      <br />
      <button onClick={() => navigate("/")}>Network</button>
      <br />
      <button onClick={() => navigate("/")}>Career Professions</button>
    </main>
  );
};

export default HomePage;
