// src/components/NavTabs/NavTabs.jsx

import { useNavigate } from "react-router";

const NavTabs = () => {
  const navigate = useNavigate();

  return (
    <div className="navtab">
      <button className="button-navtab" onClick={() => navigate("/")}>
        Posts
      </button>
      <button className="button-navtab" onClick={() => navigate("/")}>
        My Network
      </button>
      <button className="button-navtab" onClick={() => navigate("/explore")}>
        Explore
      </button>
    </div>
  );
};

export default NavTabs;
