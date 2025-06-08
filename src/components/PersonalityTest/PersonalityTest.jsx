// src/components/PersonalityTest.jsx
import { useNavigate } from "react-router";
import { Link } from "react-router";
import NavBar from "../NavBar/NavBar.jsx";
import TopNavBar from "../TopNavBar/TopNavBar.jsx";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="personality">
      <TopNavBar />
      {/* <nav className="top-navbar">
        <Link onClick={() => navigate(-1)}>
          <img src="images/icons/back-arrow.svg" alt="Explore" />
        </Link>
      </nav> */}
      <main className="personality-inset floating-content">
        {/* <p>Discover your inner traits</p> */}
        <img
          src="images/main-app/personality-test-crop.png"
          alt="Icon"
          // className="floating-content"
        />
        <a
          href="https://www.yourselfirst.com/career?utm_source=google&utm_medium=cpc&utm_term=personality%20test%20for%20career%20path&utm_campaign=Careers&utm_campaign_name=Careers&utm_campaign_id=22078750217&utm_adset_id=181370381988&utm_adset_name=Careers&utm_ad_id=727401597295&gad_source=1&gad_campaignid=22078750217&gbraid=0AAAAA-F0voz2lEM0t6kx2KWXTlQCxfAQC&gclid=Cj0KCQjwiqbBBhCAARIsAJSfZkYYvWKzHwf2YsVdN6Wzo_7WhGONAmKznF-DwDBrzeZCBMMmE8rFQKUaAtN1EALw_wcB"
          target="_blank"
          rel="noopener noreferrer"
        >
          <br />
          <button>Test It Out!</button>
        </a>
      </main>
      <NavBar />
    </div>
  );
};

export default HomePage;
