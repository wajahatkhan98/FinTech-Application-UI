import React from "react";
import Banner1 from "../../component/Banner1/Banner1";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/header/Header";
import GradientButton from "../../component/gradientButton/GradientButton";
import Advantage from "../../component/advantage/Advantage";

import "./style.css";
import { FAQ } from "../../component/faq/FAQ";
import HeadingWithButton from "../../component/headingWithButton/HeadingWithButton";

const InterestMoney = () => {
  return (
    <>
      <Header />
      <Banner1
        heading={"Interest on your"}
        subheading="Get your free International card without annoying paperwork within minutes"
        heading1={"money 1.5 APY"}
        buttonText="Top-Up Now"
        bgImage={"interest-bg"}
      />
      <section className="interust-container">
        <div className="interust-wrapper">
          <h3 className="interust-deatails-heading-sub size-36">
            Interest on your money 1.5 APY
          </h3>
        </div>
        <div className="interust-mid-bottom-details">
          <p className="para-details size-15">
            Don’t wait for payday. Sign up for early direct deposit and get your
            paycheck up to two days earlier. It’s quick and easy to get started.
          </p>
        </div>
        <center className="interust-button">
          <GradientButton
            buttonText={"Enjoy Solix free account"}
            isIcon={true}
          />
        </center>
      </section>
      {/* <HeadingWithButton
        heading={"Interrest"}
        para="get monk xhs dhd hdg"
        buttonText={"get paid early"}
      /> */}
      <section>
        <div className="advantage-component">
          <Advantage
            heading={"Take Advantage of Solix Account"}
            para={` To open your international Solix account, you must provide a fixed
         					address in Brazil and a Brazilian or US telephone number. In addition,
         					you must be over 18 years of age and present one of these valid
         					identification documents: CNH (National Driver's License), RG (General
         					Registration) or Brazilian Passport. Open your account now!`}
          />
        </div>
      </section>
      <FAQ />

      <Footer />
    </>
  );
};

export default InterestMoney;
