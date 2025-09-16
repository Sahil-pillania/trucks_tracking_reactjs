import React from "react";
import Lottie from "lottie-react";

import aboutAnimation from "/src/assets/Animes/AboutUs.json";

function About() {
  return (
    <>
      <div className="wrapper_about">
        <div className="about-card">
          <div className="about-card-image">
            <Lottie animationData={aboutAnimation} loop={true} />
          </div>
          <div className="about-card-content">
            <h2>About Us</h2>
            <p>
              Welcome to our website! We are a passionate team dedicated to
              creating high-quality web applications and services. Our goal is
              to bring value to users through simple, elegant, and effective
              solutions. With years of combined experience, we strive to push
              boundaries and deliver the best experience possible.
            </p>
            <div className="contact-details">
              <p>
                <strong>📞 Phone:</strong> +1 (555) 123-4567
              </p>
              <p>
                <strong>✉️ Email:</strong> contact@yourcompany.com
              </p>
              <p>
                <strong>📍 Address:</strong> 123 Web Dev Street, Silicon Valley,
                CA
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
