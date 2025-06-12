import { useContext, useState, useEffect, useLayoutEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router";
import "./global.css";

import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";
import Landing from "./components/Landing/Landing";
import HomePage from "./components/HomePage/HomePage";
import PersonalityTest from "./components/PersonalityTest/PersonalityTest.jsx";
import Game from "./components/Game/Game.jsx";

import CommunityList from "./components/CommunityList/CommunityList.jsx";
import CommunityDetails from "./components/CommunityDetails/CommunityDetails.jsx";
import CommunityPostForm from "./components/CommunityPostForm/CommunityPostForm.jsx";
import * as postService from "./services/postService.js";

import MyNetwork from "./components/MyNetwork/MyNetwork.jsx";

import Explore from "./components/Explore/Explore.jsx";
import EditProfile from "./components/EditProfile/EditProfile.jsx";
import YouTubePage from "./components/YouTubePage/YouTubePage.jsx";
import { UserContext } from "./contexts/UserContext.jsx";

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

const App = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  const handleAddPost = async (postFormData) => {
    const newPost = await postService.create(postFormData);
    setPosts([newPost, ...posts]);
    navigate("/community");
  };

  const handleDeletePost = async (postId) => {
    const deletedPost = await postService.deletePost(postId);

    setPosts(posts.filter((post) => post._id !== deletedPost._id));
    navigate("/community");
  };

  const handleUpdatePost = async (postId, postFormData) => {
    const updatedPost = await postService.update(postId, postFormData);
    setPosts(posts.map((post) => (postId === post._id ? updatedPost : post)));
    navigate(`/posts/${postId}`);
  };

  useEffect(() => {
    const fetchAllPosts = async () => {
      const postsData = await postService.index();

      setPosts(postsData);
    };
    if (user) fetchAllPosts();
  }, [user]);

  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/" element={user ? <HomePage /> : <Landing />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/personality-test" element={<PersonalityTest />} />
          <Route path="/city" element={<Game />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/users/:userId/edit" element={<EditProfile />} />
          <Route path="/shorts/:youtubeId" element={<YouTubePage />} />
          <Route path="/community" element={<CommunityList posts={posts} />} />
          <Route
            path="/posts/:postId"
            element={<CommunityDetails handleDeletePost={handleDeletePost} />}
          />
          <Route
            path="/community/new"
            element={<CommunityPostForm handleAddPost={handleAddPost} />}
          />
          <Route
            path="/posts/:postId/edit"
            element={<CommunityPostForm handleUpdatePost={handleUpdatePost} />}
          />
          <Route path="/network" element={<MyNetwork />} />
        </Routes>
      </Wrapper>
    </>
  );
};

export default App;
