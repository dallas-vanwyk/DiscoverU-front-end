import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = () => {
    localStorage.removeItem("token");

    setUser(null);
  };

  return (
    <nav className="bottom-navbar">
      {user ? (
        <ul>
          <li>
            <Link to="/">
              <img src="/images/icons/home.svg" alt="Home" />
            </Link>
          </li>
          <li>
            <Link to="/community">
            {/* <Link to="/network"> */}
              <img src="/images/icons/network.svg" alt="Network" />
            </Link>
          </li>
          <li>
            <Link to="/explore">
              <img src="/images/icons/explore.svg" alt="Explore" />
            </Link>
          </li>
          <li>
            <Link to="/city">
              <img src="/images/icons/Game.svg" alt="Game" />
            </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
