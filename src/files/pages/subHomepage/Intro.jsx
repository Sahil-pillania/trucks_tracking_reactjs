import React from "react";
import portrait from "../../../assets/Images/portrait.jpg";

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
              <h4>
                your reliable partner in managing and monitoring truck movements
              </h4>
              <p>
                Stay informed with real-time updates, route insights, and
                vehicle statuses. Our system ensures smooth coordination between
                drivers, dispatchers, and managers at all times.
              </p>
              <p>
                Whether you're managing a small fleet or a large operation,
                Trucks Tracking gives you the tools to increase efficiency,
                reduce delays, and improve customer satisfaction.
              </p>
              <p>
                With a user-friendly interface and powerful tracking features,
                our platform makes it simple to oversee operations, optimize
                routes, and reduce fuel costs. You can access all key
                information at a glance.<a> Learn More</a>
              </p>
            </div>
            <div className="imageContainer">
              <img src={portrait} className="popping" alt="truckers" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
