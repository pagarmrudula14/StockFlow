import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import SignupPage from "./SignupPage";

const Home = () => {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/Signup" element={<SignupPage />} />
      </Routes>
    </>
  );
};

export default Home;