import { useContext } from "react";
import { Link } from "react-router";
import { FaEdit } from 'react-icons/fa';
import { UserContext } from "../../contexts/UserContext";

const TopNavBar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = () => {
    localStorage.removeItem("token");

    setUser(null);
  };

  return (
    <nav className="top-navbar">
      <ul>
        <li>
          <Link to={`/users/${user._id}/edit`}><FaEdit/>
            {user?.avatar !== undefined && (
              <img
                src={`/images/avatars/${user.avatar}`}
                alt="User Avatar"
                style={{
                  width: "80px",
                  borderRadius: "50%",
                  marginBottom: "1rem",
                }}
              />
            )}
          </Link>
        </li>
        <li>
          <Link to="/" className="test-white">
            Messages
          </Link>
        </li>
        <li>
          <Link to="/" className="test-white">
            Progress Tracker
          </Link>
        </li>
        <li>
          <Link to="/" onClick={handleSignOut} className="test-white">
            Sign Out
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopNavBar;
