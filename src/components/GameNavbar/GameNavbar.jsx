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
  );
};

export default GameNavbar;
