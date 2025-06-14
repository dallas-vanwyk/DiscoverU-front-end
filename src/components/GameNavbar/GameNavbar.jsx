import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { UserContext } from "../../contexts/UserContext";

const GameNavbar = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const handleSignOut = () => {
    localStorage.removeItem("token");

    setUser(null);
  };

  return (
    <nav className="top-navbar">
      <ul>
        <li>
          <Link onClick={() => navigate(-1)}>
            <img src="images/icons/back-arrow.svg" alt="Explore" />
          </Link>
        </li>
        <li>
          <Link to="/" className="test-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/communtiy" className="test-white">
            Network
          </Link>
        </li>
        <li>
          <Link to="/explore" className="test-white">
            Explore
          </Link>
        </li>
        <li>
          <Link to="/comming-soon" className="test-white">
            Messages
          </Link>
        </li>
        <li>
          <Link to="/comming-soon" className="test-white">
            Progress Tracker
          </Link>
        </li>
        <li>
          <Link to="/" className="test-white" onClick={handleSignOut}>
            Sign Out
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default GameNavbar;
