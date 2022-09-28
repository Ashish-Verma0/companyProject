import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Routes>
        <Route exact path="/" elements={<Navbar />} />
        <Route exact path="/home" elements={<Home />} />
      </Routes>
    </>
  );
};

export default App;
