// src/components/Landing.jsx

import { useNavigate } from "react-router";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-box">
      <style>{"body{background: var(--pbg-grad)}"}</style>
      
      <main className="mainpage">
        <div className="floating-content landing">
          <img cl src="images/main-app/buildings.svg" alt="buildings icon" />

          <h2 className="heading-no-bills">
            Real Experience.
            <br />
            New Careers.
            <br />
            Pure Fun.
          </h2>

          <button className="button-white" onClick={() => navigate("/sign-in")}>
            Log in
          </button>

          <button className="button-white" onClick={() => navigate("/sign-up")}>
            Create Account
          </button>
        </div>
      </main>
    </div>
  );
};

export default Landing;
