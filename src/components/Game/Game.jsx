import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { UserContext } from "../../contexts/UserContext";
import "./Game.css";
import GameNavbar from "../GameNavbar/GameNavbar";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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
          <GameNavbar />
          <div className="game-start-wrapper">
            <img
              className="game-start"
              src="images/game/background.svg"
              alt="Game Background"
            />

            <div className="start-text">
              <h1 className="game-title">DiscoverU City</h1>
              <button className="button-pink" onClick={() => setStep(1)}>
                Start Game
              </button>
            </div>
          </div>
        </div>
      );

    case 1:
      return (
        <div>
          <GameNavbar />
          <Carousel responsive={responsive}>
            <button className="building" onClick={() => setStep(2)}>
              <img
                className="building-img"
                src="images/game/building5.svg"
                alt="Icon"
              />
              <span className="building-name">Hospital</span>
            </button>
            <div>
              <button className="building" onClick={() => setStep(2)}>
                <img
                  className="building-img"
                  src="images/game/building4.svg"
                  alt="Icon"
                />
                <span className="building-name">Aerospace</span>
              </button>
            </div>
            <div>
              <button className="building" onClick={() => setStep(2)}>
                <img
                  className="building-img"
                  src="images/game/building1.svg"
                  alt="Icon"
                />
                <span className="building-name">Education</span>
              </button>
            </div>
            <div>
              <button className="building" onClick={() => setStep(2)}>
                <img
                  className="building-img"
                  src="images/game/building2.svg"
                  alt="Icon"
                />
                <span className="building-name">Law Firm</span>
              </button>
            </div>
            <div>
              <button className="building" onClick={() => setStep(2)}>
                <img
                  className="building-img"
                  src="images/game/building3.svg"
                  alt="Icon"
                />
                <span className="building-name">Engineering</span>
              </button>
            </div>
          </Carousel>
        </div>
      );

    case 2:
      return (
        <div>
          <GameNavbar />
          <div className="professions">
            <button className="professions-button" onClick={() => setStep(3)}>
              Doctor
            </button>
            <button className="professions-button" onClick={() => setStep(3)}>
              Reasarch
            </button>
            <button className="professions-button" onClick={() => setStep(3)}>
              CEO
            </button>
            <button className="professions-button" onClick={() => setStep(3)}>
              Nursing
            </button>
            <button className="professions-button" onClick={() => setStep(3)}>
              Physical Therapy
            </button>
            <button className="professions-button" onClick={() => setStep(3)}>
              Legal
            </button>
            <button className="professions-button" onClick={() => setStep(3)}>
              Physical Assistant
            </button>
            <button className="professions-button" onClick={() => setStep(3)}>
              Psychology
            </button>
            <button className="professions-button" onClick={() => setStep(3)}>
              Accounting
            </button>
          </div>
        </div>
      );

    case 3:
      return (
        <div>
          <GameNavbar />
          <div className="case-3">
            <img
              className="case-3-doc"
              src="images/game/doctor.svg"
              alt="Icon"
            />
            <p className="case-3-text">
              Hi, I’m Nurse Director Aaron Perez. Welcome to DiscoverU City
              Hospital. So you want to learn about being a nurse. Awesome!
              Shadowing starts today. Let’s dig into the role. Click the link
              below.
            </p>
            <a
              href="https://youtu.be/1RwrSEMei8g?si=cvqJhbAe-B1kndgu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button-pink" onClick={() => setStep(4)}>
                Play Video
              </button>
            </a>
          </div>
        </div>
      );

    case 4:
      return (
        <div>
          <GameNavbar />
          <div className="case-3">
            <img
              className="case-3-doc"
              src="images/game/doctor.svg"
              alt="Icon"
            />
            <p className="case-3-text">
              Now that you know more about being a nurse, you can start your
              training. What department would you ike to train with?
            </p>
            <div className="case-4-buttons">
              <button className="professions-button" onClick={() => setStep(5)}>
                Emergency
              </button>
              <button className="professions-button" onClick={() => setStep(5)}>
                Labor & Delivery
              </button>
              <button className="professions-button" onClick={() => setStep(5)}>
                Cardiac
              </button>
              <button className="professions-button" onClick={() => setStep(5)}>
                ICU
              </button>
              <button className="professions-button" onClick={() => setStep(5)}>
                Pediatrics
              </button>
              <button className="professions-button" onClick={() => setStep(5)}>
                Home Health
              </button>
            </div>
          </div>
        </div>
      );

    case 5:
      return (
        <div>
          <GameNavbar />
          <div className="case-5">
            <div className="case-5-doc-text">
              <img
                className="case-5-doc"
                src="images/game/doctor.svg"
                alt="Icon"
              />
              <p className="case-3-text">
                You are meeting with Patient #1, Miss Wylder. Look at her charts
                and determine how many milligrams of medicine she needs. Make
                sure her this is the hour she is suppose to take her medicine,
                give or take 30 minutes.
              </p>
            </div>

            <img
              className="case-5-img"
              src="images/game/nurse-logging.png"
              alt="Icon"
            />
          </div>
          <div className="continue-center">
            <button className="continue-button" onClick={() => setStep(6)}>
              <span className="continue-text">Continue</span>
            </button>
          </div>
        </div>
      );

    case 6:
      return (
        <div>
          <GameNavbar />
          <div className="case-5">
            <div className="case-5-doc-text">
              <img
                className="case-5-doc"
                src="images/game/doctor.svg"
                alt="Icon"
              />
              <p className="case-3-text">
                It is essential to maintain clear and timely communication with
                both the doctors and the patient’s healthcare proxy regarding
                the patient’s current status and any significant changes. Before
                reaching out, carefully consider the most important details to
                convey, ensuring accuracy and clarity. Take a moment to organize
                your thoughts, Then, type a concise and informative update
                below.
              </p>
            </div>
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
          </div>

          <div className="continue-center">
            <button className="continue-button" onClick={() => setStep(7)}>
              <span className="continue-text">Continue</span>
            </button>
          </div>
        </div>
      );

    case 7:
      return (
        <div>
          <GameNavbar />
          <div className="case-5-doc-text">
            <img
              className="case-5-doc"
              src="images/game/doctor.svg"
              alt="Icon"
            />
            <p className="case-3-text">
              Regularly monitor and record the patient’s vital signs, including
              blood pressure, heart rate, temperature, and respiratory rate, to
              assess their overall health status and detect any changes that may
              require medical attention.
            </p>
          </div>

          <div className="table-center">
            <img
              className="table"
              src="images/game/nurse-table.png"
              alt="Icon"
            />
          </div>

          <div className="continue-center">
            <button className="continue-button" onClick={() => setStep(0)}>
              <span className="continue-text">Done for today!</span>
            </button>
          </div>
        </div>
      );
  }
};

export default Game;
