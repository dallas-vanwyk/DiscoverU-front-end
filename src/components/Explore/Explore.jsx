import TopNavBar from "../TopNavBar/TopNavBar.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const Explore = () => {
  return (
    <>
      <TopNavBar />
      <main>
        <div>
          <ul>
            <li>
              <Link to="/">Posts</Link>
            </li>
            <li>
              <Link to="/">My Network</Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>#Nursing</h2>
          <ul>
            <li>
              <Link to="https://youtube.com/shorts/eCZJ-e2N0Vw?si=68xsbLMHixvr_zxS">
                <img
                  src="https://img.youtube.com/vi/eCZJ-e2N0Vw/hqdefault.jpg"
                  alt="How Much I Make as a Nurse"
                  style={{
                    width: "100%",
                    maxWidth: "320px",
                    borderRadius: "8px",
                  }}
                />
              </Link>
              <p>How Much I Make as a Nurse #shorts</p>
              <p>125k Views</p>
            </li>
            <li>
              <Link to="https://youtube.com/shorts/r-1UAacCsCc?si=bZlJpmzduJh3A2HN">
                <img
                  src="https://img.youtube.com/vi/r-1UAacCsCc/hqdefault.jpg"
                  alt="The Reality of CRNA School"
                  style={{ width: "320px", borderRadius: "8px" }}
                />
              </Link>
              <p>The Reality of CRNA School</p>
              <p>125k Views </p>
            </li>
            <li>
              <Link to="https://youtube.com/shorts/yFKr3oudtBM?si=4dhVXvPr7jnCLiwi">
                <img
                  src="https://img.youtube.com/vi/yFKr3oudtBM/hqdefault.jpg"
                  alt="Nurse Practitioner VS Nurse Anesthetist"
                  style={{ width: "320px", borderRadius: "8px" }}
                />
              </Link>
              <p>Nurse Practitioner VS Nurse Anesthetist</p>
              <p>125k Views</p>
            </li>
            <li>
              <Link to="https://youtube.com/shorts/FcEZoNkGPOM?si=L05j3Gsm08CzIpZW">
                <img
                  src="https://img.youtube.com/vi/FcEZoNkGPOM/hqdefault.jpg"
                  alt="Video Thumbnail"
                  style={{ width: "320px", borderRadius: "8px" }}
                />
              </Link>
              <p>Steps to becoming a CRNA!</p>
              <p>125k Views</p>
            </li>
          </ul>
        </div>
        <div>
          <h2>Learn More</h2>
          <ul>
            <li>
              <img
                src="images/explore-page/13.png"
                alt="two people high-fiveing"
              />
              Women's Health
            </li>
            <li>
              <img src="images/explore-page/.png" alt="Nurse Director" />
              Nurse Director
            </li>
            <li>
              <img
                src="images/explore-page/11.png"
                alt="Family Nurse Practitioner"
              />
              Family Nurse Practitioner
            </li>
            <li>
              <img src="images/explore-page/15.png" alt="professor" />
              Professor
            </li>
            <li>
              <img src="images/explore-page/12.png" alt="professor" />
              Geriatric
            </li>
            <li>
              <img src="images/explore-page/14.png" alt="professor" />
              Emergency Room
            </li>
          </ul>
        </div>
        <div>
          <h2>Let's Get On Track</h2>
          <ul>
            <li>
              <img
                src="images/explore-page/9.png"
                alt="two people high-fiveing"
              />
              Lets Strategize
            </li>
            <li>
              <img
                src="images/explore-page/10.png"
                alt="man pondering different professions"
              />
              BrainStorm
            </li>
            <li>
              <img
                src="images/explore-page/8.png"
                alt="two people looking at graph"
              />
              Growing Fields, Growing Pay
            </li>
            <li>
              <img
                src="images/explore-page/7.png"
                alt="poeple climbing points on graph"
              />
              Career Tracks
            </li>
          </ul>
        </div>
        <div>
          <h2>Programs</h2>
          <ul>
            <li>
              <img src="images/explore-page/3.png" alt="person brainstorming" />
              Looking For Schools?
            </li>
            <li>
              <img src="images/explore-page/5.png" alt="people on podiums " />
              Mentorship
            </li>
          </ul>
        </div>
        <div>
          <h2>Ask Dixie</h2>
          <button onClick={() => navigate("/")}>Learn More With Dixie</button>
        </div>
      </main>
      <NavBar />
    </>
  );
};

export default Explore;
