import React, { useState } from "react";
import Lottie from "lottie-react";

import contactAnimation from "/src/assets/Animes/Contactus.json";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");

    // To clear the form
    setFormData({
      name: "",
      email: "",
      mobile: "",
      comment: "",
    });
  };

  return (
    <div className="contact-container">
      <div className="inner_wrapper">
        <div className="contact-image">
          <Lottie animationData={contactAnimation} loop={true} />
        </div>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email ID:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Mobile No:
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              pattern="[0-9]{10}"
              required
            />
          </label>

          <label>
            Your Comment:
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              rows="4"
              required
            />
          </label>

          <button className="submit_button" type="submit" variant="success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
