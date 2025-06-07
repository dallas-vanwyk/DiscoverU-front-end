// src/components/YoutubeTest/YoutubeTest.jsx

// import React from "react";
// import { render } from "react-dom";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const youtubeStyle = {
  width: "800px",
  height: "600px",
};

const App = () => (
  <div>
    <LiteYouTubeEmbed
    //   id="SSbBvKaM6sk"
      id="E9157VVAitI"
      title="Career Interview Reel"
      style={youtubeStyle}
    />
  </div>
);

// render(<App />, document.getElementById("root"));

export default App;
