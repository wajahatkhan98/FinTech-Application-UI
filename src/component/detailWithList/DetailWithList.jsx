import React from "react";
import { icons, InternationalAccountPoints } from "../../utils/constants";
import GradientButton from "../gradientButton/GradientButton";
import Tag from "../Tag/Tag";
import "./style.css";
const DetailWithList = () => {
  return (
    <section className="detail-with-list-main">
      <div className="detail-with-list-left" data-aos-duration="1000"
              data-aos="fade-right">
        <h2 className="detail-with-list-heading size-56" >
          FREE CALLS TO <span>MEXICO,</span> <span> CANADA,</span> AND MORE
        </h2>
        <p className="detail-with-list-para size-15">
          Take advantage of free international calling to more than 20
          countries, including Mexico, Canada, the UK, and Spain.
        </p>
        <ul className="service-card2-points">
          {InternationalAccountPoints[0].split(";").map((item, index) => (
            <li key={item + index} className="service-card2-point">
              <img src={icons.checkIcon} alt="" />
              <span className="size-15">{item};</span>
            </li>
          ))}
        </ul>
        <GradientButton buttonText={"Get Solix Free Account"} />
      </div>
      <div className="detail-with-list-right" data-aos-duration="1000"
              data-aos="fade-left">
        <div className="countries-list2">
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
        </div>
      </div>
    </section>
  );
};

export default DetailWithList;
