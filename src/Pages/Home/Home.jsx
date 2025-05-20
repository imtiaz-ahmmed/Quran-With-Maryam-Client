import React from "react";
import Banner from "./Banner";
import About from "./About";
import Features from "./Features";
import App from "./App";

const Home = () => {
  return (
    <div className="bg-white">
      <Banner></Banner>
      <About></About>
      <Features></Features>
      <App></App>
    </div>
  );
};

export default Home;
