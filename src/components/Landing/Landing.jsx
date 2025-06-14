import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-box">
      <main className="mainpage">
        {showSplash ? (
          <div className="splash-screen">
            <h1 className="heading-no-bills splash-text">DiscoverU</h1>
          </div>
        ) : (
          <div className="floating-content landing">
            <img src="images/main-app/buildings.svg" alt="buildings icon" />

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
        )}
      </main>
    </div>
  );
};

export default Landing;