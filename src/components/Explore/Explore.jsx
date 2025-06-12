import TopNavBar from "../TopNavBar/TopNavBar.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import { Link } from "react-router";
import { useNavigate } from "react-router";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NavTabs from "../NavTabs/NavTabs";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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

const Explore = () => {
  const navigate = useNavigate();
  return (
    <>
      <style>
        {"body{background: var(--pbg-grad); color: white;}"}
        {".heading-no-bills{text-align: left}"}
        {"img{max-width: 200px}"}
      </style>

      <TopNavBar />

      <main className="mainpage">
        <NavTabs />

        <div className="floating-content">
          <div>
            <h2 className="heading-no-bills">#Nursing</h2>

            <Carousel responsive={responsive}>
              <div className="youtube-div">
                <Link to="/shorts/eCZJ-e2N0Vw">
                  <img
                    src="https://img.youtube.com/vi/eCZJ-e2N0Vw/oar1.jpg"
                    alt="How Much I Make as a Nurse"
                    className="youtube-thumbnail"
                  />
                </Link>

                <p className="youtube-title">
                  How Much I Make as a Nurse #shorts
                </p>

                <p className="youtube-views">125k Views</p>
              </div>

              <div className="youtube-div">
                <Link to="/shorts/r-1UAacCsCc">
                  <img
                    src="https://img.youtube.com/vi/r-1UAacCsCc/oar1.jpg"
                    alt="The Reality of CRNA School"
                    className="youtube-thumbnail"
                  />
                </Link>

                <p className="youtube-title">The Reality of CRNA School</p>

                <p className="youtube-views">125k Views </p>
              </div>

              <div className="youtube-div">
                <Link to="/shorts/yFKr3oudtBM">
                  <img
                    src="https://img.youtube.com/vi/yFKr3oudtBM/oar1.jpg"
                    alt="Nurse Practitioner VS Nurse Anesthetist"
                    className="youtube-thumbnail"
                  />
                </Link>

                <p className="youtube-title">
                  Nurse Practitioner VS Nurse Anesthetist
                </p>

                <p className="youtube-views">125k Views</p>
              </div>

              <div className="youtube-div">
                <Link to="/shorts/FcEZoNkGPOM">
                  <img
                    src="https://img.youtube.com/vi/FcEZoNkGPOM/oar1.jpg"
                    alt="Video Thumbnail"
                    className="youtube-thumbnail"
                  />
                </Link>

                <p className="youtube-title">Steps to becoming a CRNA!</p>

                <p className="youtube-views">125k Views</p>
              </div>
            </Carousel>
          </div>

          <div>
            <h2 className="heading-no-bills">Learn More</h2>

            <Carousel responsive={responsive}>
              <div className="carousel-div">
                <img
                  src="images/explore-page/13.png"
                  alt="two people high-fiveing"
                />
                Women's Health
              </div>

              <div className="carousel-div">
                <img src="images/explore-page/15.png" alt="Nurse Director" />
                Nurse Director
              </div>

              <div className="carousel-div">
                <img
                  src="images/explore-page/11.png"
                  alt="Family Nurse Practitioner"
                />
                Family Nurse Practitioner
              </div>

              <div className="carousel-div">
                <img src="images/explore-page/.png" alt="professor" />
                Professor
              </div>

              <div className="carousel-div">
                <img src="images/explore-page/12.png" alt="professor" />
                Geriatric
              </div>

              <div className="carousel-div">
                <img src="images/explore-page/14.png" alt="professor" />
                Emergency Room
              </div>
            </Carousel>
          </div>

          <div>
            <h2 className="heading-no-bills">Let's Get On Track</h2>

            <Carousel responsive={responsive}>
              <div className="carousel-div">
                <img
                  src="images/explore-page/9.png"
                  alt="two people high-fiveing"
                />
                Let's Strategize
              </div>

              <div className="carousel-div">
                <img
                  src="images/explore-page/10.png"
                  alt="man pondering different professions"
                />
                BrainStorm
              </div>

              <div className="carousel-div">
                <img
                  src="images/explore-page/8.png"
                  alt="two people looking at graph"
                />
                Growing Fields, Growing Pay
              </div>

              <div className="carousel-div">
                <img
                  src="images/explore-page/7.png"
                  alt="poeple climbing points on graph"
                />
                Career Tracks
              </div>
            </Carousel>
          </div>

          <div>
            <h2 className="heading-no-bills">Programs</h2>
            <Carousel responsive={responsive}>
              <div className="carousel-div">
                <img
                  src="images/explore-page/3.png"
                  alt="person brainstorming"
                />
                Looking For Schools?
              </div>

              <div className="carousel-div">
                <img src="images/explore-page/5.png" alt="people on podiums " />
                Mentorship
              </div>
            </Carousel>
          </div>

          <div>
            <h2 className="heading-no-bills">Ask Dixie</h2>

            <button className="button-dixie" onClick={() => navigate("/")}>
              Learn More With Dixie
            </button>
          </div>
        </div>
      </main>

      <NavBar />
    </>
  );
};

export default Explore;
