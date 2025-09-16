import React from "react";

const MoreInfo = () => {
  return (
    <>
      <div className="moreInfoWrapper">
        <div className="innerWrapper contentBox">
          <h2>More Information</h2>
          <p>
            For more information about our services, features, or support
            options, feel free to contact us anytime. We're here to help you
            every step of the way.
          </p>
          <a href="/services">
            <button variant="outline-warning">Read More</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default MoreInfo;
