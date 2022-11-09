import React from "react";
import "./style.css";
const Banner2 = ({ bgImg,icon }) => {
  return <section className={`banner2 ${bgImg}`}>
    <div className="banner2-icon">
      <img src={icon} alt="" />
    </div>
    <h2 className="size-90 gradient-text banner2-heading">Community</h2>
    <div className="banner2-para size-15 color-white">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
    </div>
  </section>;
};

export default Banner2;
