import { useContext, useState } from "react";
import { Routes, Route } from "react-router";
import "./global.css";

import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";
import Landing from "./components/Landing/Landing";
import HomePage from "./components/HomePage/HomePage";
import PersonalityTest from "./components/PersonalityTest/PersonalityTest.jsx";
import Game from "./components/Game/Game.jsx";

import Explore from "./components/Explore/Explore.jsx";

import EditProfile from "./components/EditProfile/EditProfile.jsx";

import { UserContext } from "./contexts/UserContext";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Routes>
        <Route path="/" element={user ? <HomePage /> : <Landing />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/personality-test" element={<PersonalityTest />} />
        <Route path="/city" element={<Game />} />

        <Route path="/explore" element={<Explore />} />

        <Route path="/users/:userId/edit" element={<EditProfile />} />

      </Routes>
    </>
  );
};

export default App;
