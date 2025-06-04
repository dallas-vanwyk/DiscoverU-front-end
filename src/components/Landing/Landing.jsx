// src/components/Landing.jsx

import { useNavigate } from "react-router";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <main>
      <h2>Real Experience.</h2>
      <h2>New Careers.</h2>
      <h2>Pure Fun.</h2>

      <button onClick={() => navigate("/sign-in")}>Log in</button>
      <button onClick={() => navigate("/sign-up")}>Create Account</button>
    </main>
  );
};

export default Landing;
