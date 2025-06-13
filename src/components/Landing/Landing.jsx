// src/components/Landing.jsx

import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

const Landing = () => {
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(true);

   useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500); // show splash for 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-box">
           <style>{`
        body {
          background: var(--pbg-grad);
          margin: 0;
          font-family: 'Post No Bills Colombo', serif;
        }

        .splash-screen {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: var(--pbg-grad);
        }

        .splash-text {
          font-size: 4rem;
          color: white;
          text-align: center;
          animation: fadeIn 1s ease-in-out;
        }

        .floating-content.landing {
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
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
