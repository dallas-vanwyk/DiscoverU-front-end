// src/components/Landing.jsx

import { useNavigate } from "react-router";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <main>
      <img src="images/main-app/buildings.svg" alt="Icon" />
      <h2>Real Experience.</h2>
      <h2>New Careers.</h2>
      <h2>Pure Fun.</h2>

      <button onClick={() => navigate("/sign-in")}>Log in</button>
      <br />
      <button onClick={() => navigate("/sign-up")}>Create Account</button>
    </main>
  );
};

export default Landing;
