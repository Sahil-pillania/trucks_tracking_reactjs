import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="bannerBox">
        <img
          src={`${import.meta.env.BASE_URL}src/assets/Images/banner.jpg`}
          alt="Banner Image"
        />
      </div>
    </div>
  );
};

export default Banner;
