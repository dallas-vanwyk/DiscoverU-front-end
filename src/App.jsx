import { useContext, useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";
import Landing from "./components/Landing/Landing";
import HomePage from "./components/HomePage/HomePage";
import PersonalityTest from "./components/PersonalityTest/PersonalityTest.jsx";
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
      </Routes>
      <NavBar />
    </>
  );
};

export default App;
