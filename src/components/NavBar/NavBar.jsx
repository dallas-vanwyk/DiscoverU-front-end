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
    <nav>
      {user ? (
        <ul>
          <li>
            <Link to="/">
              <img src="images/icons/Home.svg" alt="Home" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="images/icons/Network.svg" alt="Network" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="images/icons/explore.svg" alt="Explore" />
            </Link>
          </li>
          <li>
            <Link to="/city">
              <img src="images/icons/Game.svg" alt="Game" />
            </Link>
          </li>
          {/* <li>
            <Link to="/" onClick={handleSignOut}>
              Sign Out
            </Link>
          </li> */}
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
