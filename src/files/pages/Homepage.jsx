import React from "react";
import Banner from "./subHomepage/Banner";
import Intro from "./subHomepage/Intro";
import MoreInfo from "./subHomepage/MoreInfo";
import Services from "./Services";
import About from "./about";

function Homepage() {
  return (
    <>
      <Banner />
      <Intro />
      <MoreInfo />
      <Services />
      <About />
    </>
  );
}

export default Homepage;
