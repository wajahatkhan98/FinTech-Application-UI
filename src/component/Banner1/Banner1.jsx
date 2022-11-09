import React from "react";
import GradientButton from "../gradientButton/GradientButton";
import "./style.css";

const Banner1 = ({ heading, heading1, subheading, buttonText, bgImage }) => {
  return (
    <>
      <section className={`banner1 bg-image ${bgImage}`}>
        <div
          className="banner1-left"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h1 className="heading size-90">
            <span>
              {heading}{" "}
              {heading1 && (
                <>
                  <br /> {heading1}
                </>
              )}
            </span>
          </h1>
          <br />
          <h2 className="sub-heading size-36">{subheading}</h2>
          {buttonText !== false && <GradientButton buttonText={buttonText} />}
        </div>
      </section>
    </>
  );
};

export default Banner1;
