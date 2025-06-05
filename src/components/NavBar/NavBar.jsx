import { useContext } from "react";
import { Link } from "react-router";
import { RiHome2Line } from 'react-icons/ri';
import { FaPeopleGroup } from 'react-icons/fa6';
import { LuGamepad2 } from 'react-icons/lu';

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
            <Link to="/"><RiHome2Line/>
            <br />Home</Link>
          </li>
          <li>
            <Link to="/"><FaPeopleGroup/>
            <br />Network</Link>
          </li>
          <li>
            <Link to="/"><LuGamepad2/>
            <br />Game</Link>
          </li>
          <li>More</li>
          <li>
            <Link to="/" onClick={handleSignOut}>
              Sign Out
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
