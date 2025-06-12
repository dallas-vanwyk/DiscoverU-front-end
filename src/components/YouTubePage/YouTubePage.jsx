// src/components/YouTubePage/YouTubePage.jsx

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import NavTabs from "../NavTabs/NavTabs.jsx";
import TopNavBar from "../TopNavBar/TopNavBar.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import { useParams } from "react-router";

const youtubeStyle = {
  width: "100%",
  height: "800px",
};

const YouTubePage = () => {
  const { youtubeId } = useParams();

  return (
    <div>
      <style>{"body{background: var(--pbg-grad); color: white;}"}</style>

      <TopNavBar />

      <main className="mainpage">
        <NavTabs />

        <div>
          <LiteYouTubeEmbed
            id={youtubeId}
            title="Career Interview Reel"
            style={youtubeStyle}
          />
        </div>
      </main>

      <NavBar />
    </div>
  );
};

export default YouTubePage;
