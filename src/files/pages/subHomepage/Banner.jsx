import React from "react";
import bannerImg from "../../../assets/Images/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="bannerBox">
        <img src={bannerImg} alt="Banner Image" />
      </div>
    </div>
  );
};

export default Banner;
