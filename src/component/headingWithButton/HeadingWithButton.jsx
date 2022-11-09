import React from "react";
import GradientButton from "../gradientButton/GradientButton";

const HeadingWithButton = ({heading,para,buttonText}) => {
  return (
    <section className="Get-paid-container">
      <div className="get_paid_wrapper">
        <h3 className="get-paid-deatails-heading-sub size-36">
          {heading}
        </h3>
      </div>
      <div className="get_paid_mid_bottom_details">
        <p className="para-details size-15">
          {para}
        </p>
      </div>
      <center className="get-paid-button">
        <GradientButton buttonText={buttonText} isIcon={true} />
      </center>
    </section>
  );
};

export default HeadingWithButton;
