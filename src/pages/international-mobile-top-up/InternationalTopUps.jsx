import React from "react";
import Banner1 from "../../component/Banner1/Banner1";
import BenifitLine from "../../component/benifit-line/BenifitLine";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/header/Header";
import MobileTopUp from "../../assets/MobileTopUp.png";
import "./style.css";
import Advantage from "../../component/advantage/Advantage";
import GradientButton from "../../component/gradientButton/GradientButton";
import { FAQ } from "../../component/faq/FAQ";
import LineHeading from "../../component/lineHeading/LineHeading";

const InternationalTopUps = () => {
  return (
    <>
      <Header />
      <Banner1
        heading={"International"}
        subheading="Get your free International card without annoying paperwork within minutes"
        heading1={"Mobile Top-Ups"}
        buttonText="Top-Up Now"
        bgImage={"top-ups-bg"}
      />
      <section className="container_section">
        <BenifitLine />
        {/* <div className="wrapper2_details">
					<div className="deatails-heading size-90 gradient-text">
						Moblie TopUp
					</div>
					<h3 className="deatails-heading-sub3 size-36">
						Send Unlimited, No-Fee Mobile Top-Ups home
					</h3>
				</div> */}
        <LineHeading
          heading={"Moblie TopUp"}
          subHeading="Send Unlimited, No-Fee Mobile Top-Ups home"
        />
        <div className="mid3_bottom_details">
          <p className="para-details size-15" data-aos-duration="1000"
              data-aos="fade-left">
            Top up loved ones back home without spending extra on fees. Send
            phone credits to 35+ countries including Cuba, Mexico, Nigeria,
            Colombia, and more. Family and friends can use your top-ups to call,
            send messages, and surf the internet.
          </p>

          <center className="service-button" data-aos-duration="1000"
              data-aos="fade-up">
            <GradientButton
              buttonText={"Get Solix free account"}
              isIcon={true}
            />
          </center>

          <div className="bottom_section" data-aos-duration="1000"
              data-aos="fade-up">
            <img
              style={{ position: "relative", top: "-10rem" }}
              src={MobileTopUp}
              alt=""
            />
          </div>
          <div className="advantage2_section">
            <Advantage
              heading={"Take Advantage of Solix Account"}
              para={` To open your international Solix account, you must provide a fixed
					   address in Brazil and a Brazilian or US telephone number. In addition,
					   you must be over 18 years of age and present one of these valid
					   identification documents: CNH (National Driver's License), RG (General
					   Registration) or Brazilian Passport. Open your account now!`}
            />
          </div>
        </div>
      </section>
      <FAQ />
      <Footer />
    </>
  );
};

export default InternationalTopUps;
