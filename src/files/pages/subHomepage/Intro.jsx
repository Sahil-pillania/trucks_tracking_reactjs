import React from "react";

const Intro = () => {
  return (
    <>
      <div className="IntroWrapper">
        <div className="wrapper">
          <div className="cardsWrapper">
            <div className="introText welcome_TextCard">
              <div>
                <h2 className="welcome_heading">Welcome to Trucks Tracking</h2>
              </div>
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Recusandae.adipisicing elit. Recusandae.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Recusandae. adipisicing elit. Recusandae.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Recusandae. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Recusandae.<a href=""> Link</a>
              </p>
            </div>
            <div className="imageContainer">
              <img
                src="src/assets/Images/portrait.jpg"
                className="popping"
                alt="truckers"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
