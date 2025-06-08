import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

import { UserContext } from "../../contexts/UserContext";

const Game = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    textField: "",
  });
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = () => {
    localStorage.removeItem("token");

    setUser(null);
  };

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const goBack = () => setStep((step) => step - 1);

  switch (step) {
    case 0:
      return (
        <div>
          <nav className="top-navbar">
            <ul>
              <li>
                <Link onClick={() => navigate(-1)}>
                  <img src="images/icons/back-arrow.svg" alt="Explore" />
                </Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Network</Link>
              </li>
              <li>
                <Link to="/">Explore</Link>
              </li>
              <li>
                <Link to="/">Messages</Link>
              </li>
              <li>
                <Link to="/">Progress Tracker</Link>
              </li>
              <li>
                <Link to="/" onClick={handleSignOut}>
                  Sign Out
                </Link>
              </li>
            </ul>
          </nav>
          <img src="images/game/background.svg" alt="Icon" />
          <h1>DiscoverU City</h1>
          <button onClick={() => setStep(1)}>Start Game</button>
        </div>
      );

    case 1:
      return (
        <div>
          <h2>DiscoverU City</h2>
          <button onClick={goBack}>
            <img src="images/game/arrow.svg" alt="Icon" />
          </button>
          <button onClick={() => setStep(2)}>
            <img src="images/game/building5.svg" alt="Icon" />
            Hospital
          </button>
          <button onClick={() => setStep(2)}>
            <img src="images/game/building4.svg" alt="Icon" />
            Aerospace
          </button>
          <button onClick={() => setStep(2)}>
            <img src="images/game/building1.svg" alt="Icon" />
            Education
          </button>
          <button onClick={() => setStep(2)}>
            <img src="images/game/building2.svg" alt="Icon" />
            Law Firm
          </button>
          <button onClick={() => setStep(2)}>
            <img src="images/game/building3.svg" alt="Icon" />
            Engineering
          </button>
        </div>
      );

    case 2:
      return (
        <div>
          <h2>DiscoverU City</h2>
          <button onClick={goBack}>
            <img src="images/game/arrow.svg" alt="Icon" />
          </button>
          <button onClick={() => setStep(3)}>Doctor</button>
          <button onClick={() => setStep(3)}>Reasarch</button>
          <button onClick={() => setStep(3)}>CEO</button>
          <button onClick={() => setStep(3)}>Nursing</button>
          <button onClick={() => setStep(3)}>Physical Therapy</button>
          <button onClick={() => setStep(3)}>Legal</button>
          <button onClick={() => setStep(3)}>Physical Assistant</button>
          <button onClick={() => setStep(3)}>Psychology</button>
          <button onClick={() => setStep(3)}>Accounting</button>
        </div>
      );

    case 3:
      return (
        <div>
          <h2>DiscoverU City</h2>
          <button onClick={goBack}>
            <img src="images/game/arrow.svg" alt="Icon" />
          </button>
          <img src="images/game/doctor.svg" alt="Icon" />
          <p>
            So you want to learn about being a nurse. Awesome! Let’s dig into
            the role. Click the link below
          </p>
          <a
            href="https://youtu.be/1RwrSEMei8g?si=cvqJhbAe-B1kndgu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button onClick={() => setStep(4)}>Play Video</button>
          </a>
        </div>
      );

    case 4:
      return (
        <div>
          <h2>DiscoverU City</h2>
          <button onClick={goBack}>
            <img src="images/game/arrow.svg" alt="Icon" />
          </button>
          <img src="images/game/doctor.svg" alt="Icon" />
          <p>
            Now that you know more about being a nurse, you can start your
            training. What department would you ike to train with?
          </p>
          <button onClick={() => setStep(5)}>Emergency</button>
          <button onClick={() => setStep(5)}>Labor & Delivery</button>
          <button onClick={() => setStep(5)}>Cardiac</button>
          <button onClick={() => setStep(5)}>ICU</button>
          <button onClick={() => setStep(5)}>Pediatrics</button>
          <button onClick={() => setStep(5)}>Home Health</button>
        </div>
      );

    case 5:
      return (
        <div>
          <h2>DiscoverU City</h2>
          <button onClick={goBack}>
            <img src="images/game/arrow.svg" alt="Icon" />
          </button>
          <p>
            You are meeting with Patient #1, Miss Wylder. Look at her charts and
            determine how many milligrams of medicine she needs. Make sure her
            this is the hour she is suppose to take her medicine, give or take
            30 minutes.
          </p>
          <img src="images/game/doctor.svg" alt="Icon" />
          <img src="images/game/nurse-logging.png" alt="Icon" />
          <button onClick={() => setStep(6)}>Continue</button>
        </div>
      );

    case 6:
      return (
        <div>
          <h2>DiscoverU City</h2>
          <button onClick={goBack}>
            <img src="images/game/arrow.svg" alt="Icon" />
          </button>
          <p>
            It is essential to maintain clear and timely communication with both
            the doctors and the patient’s healthcare proxy regarding the
            patient’s current status and any significant changes. Before
            reaching out, carefully consider the most important details to
            convey, ensuring accuracy and clarity. Take a moment to organize
            your thoughts, Then, type a concise and informative update below.
          </p>
          <form>
            <div>
              <input
                type="text"
                autoComplete="off"
                id="textField"
                value={formData.textField}
                name="textField"
                onChange={handleChange}
                required
              />
            </div>
          </form>
          <button onClick={() => setStep(7)}>Continue</button>
        </div>
      );

    case 7:
      return (
        <div>
          <h2>DiscoverU City</h2>
          <button onClick={goBack}>
            <img src="images/game/arrow.svg" alt="Icon" />
          </button>
          <p>
            Regularly monitor and record the patient’s vital signs, including
            blood pressure, heart rate, temperature, and respiratory rate, to
            assess their overall health status and detect any changes that may
            require medical attention.
          </p>
          <img src="images/game/nurse-table.png" alt="Icon" />
          <button onClick={() => setStep(8)}>Continue</button>
        </div>
      );

    case 8:
      return (
        <div>
          <h2>DiscoverU City</h2>
          <button onClick={goBack}>
            <img src="images/game/arrow.svg" alt="Icon" />
          </button>
          <h2>You Learned about Nursing!!!</h2>
          <button onClick={() => setStep(0)}>Menu</button>
        </div>
      );
  }
};

export default Game;
