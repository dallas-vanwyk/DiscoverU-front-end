// src/components/HomePage.jsx

import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <button onClick={() => navigate("/personality-test")}>
        Personality Test
      </button>
      <button onClick={() => navigate("/")}>Network</button>
      <button onClick={() => navigate("/")}>Career Professions</button>
    </main>
  );
};

export default HomePage;
