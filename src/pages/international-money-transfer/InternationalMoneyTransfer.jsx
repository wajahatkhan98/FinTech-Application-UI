import Banner1 from "../../component/Banner1/Banner1";
import { useState } from "react";
import BenifitLine from "../../component/benifit-line/BenifitLine";
import CountrBox from "../../component/country-box/CountryBox";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/header/Header";
import HeroPhone from "../../assets/hero-phone2.gif";
import Phones from "../../assets/place-phone2.gif";

import Arrows from "../../assets/arrow-reverse.png";

import "./style.css";
import DetailWithPicture from "../../component/detailWithPicture/DetailWidthPicture";
import Advantage from "../../component/advantage/Advantage";
import { Card1 } from "../../component/Card1/Card1";
import { icons } from "../../utils/constants";
import LineHeading from "../../component/lineHeading/LineHeading";
const InternationalMoneyTransfer = () => {
  const [isShuffle, setIsShuffle] = useState(false);
  const shuffle = () => {
    setIsShuffle(!isShuffle);
  };
  const [isShuffle1, setIsShuffle1] = useState(false);
  const shuffle1 = () => {
    setIsShuffle1(!isShuffle1);
  };
  return (
    <>
      <Header />
      <Banner1
        heading={"International"}
        subheading="Get your free International card without annoying paperwork within minutes"
        heading1={"Money Transfer"}
        buttonText="Tranfer Money Now"
        bgImage={"money-bg"}
      />
      <section className="section1_mid">
        <BenifitLine />
        {/* <div className="wrapper1_details">
          <div className="deatails-heading size-90 gradient-text">
            Money Transfer
          </div>
          <h3 className="deatails-heading-sub size-36">
            Send More & Save More
          </h3>
        </div> */}
        <LineHeading
          heading={"Money Transfer"}
          subHeading=" Send More & Save More"
        />
        <div className="mid_bottom_details">
          <p
            className="para-details size-15"
            data-aos-duration="1000"
            data-aos="fade-up"
          >
            You can send international money transfers without fees. That means
            you spend less to send more money to your family back home. Plus,
            your transfers are quick, easy, and secure.
          </p>
          <div className="group-img">
            <div
              className="phone_img"
              data-aos-duration="1000"
              data-aos="fade-right"
            >
              <img
                style={{
                  width: "51rem",
                  height: "67rem",
                  transform: "rotate(-44deg)",
                }}
                src={Phones}
                alt=""
              />
            </div>
            <div
              className="bottom_card"
              data-aos-duration="1000"
              data-aos="fade-left"
            >
              <div
                id="card_1"
                className={!isShuffle ? "country_card1" : "country_card2"}
              >
                <CountrBox
                  props={{ backgroundColor: "rgba(30, 30, 30, 1)" }}
                  isUsa={isShuffle}
                  price={isShuffle ? "R$ 5.103,71" : "$ 1.002,30"}
                  text={isShuffle ? "Reals" : "USD"}
                />
              </div>
              <div onClick={() => shuffle()} className="arrow_reverse">
                <img src={Arrows} alt="" />
              </div>
              <div
                id="card_2"
                className={isShuffle ? "country_card1" : "country_card2"}
              >
                <CountrBox
                  isUsa={!isShuffle}
                  price={!isShuffle ? "R$ 5.103,71" : "$ 1.002,30"}
                  text={!isShuffle ? "Reals" : "USD"}
                />
              </div>
            </div>
          </div>
        </div>

        <DetailWithPicture>
          <div className="shuffle-card-wrapper">
            <div className="shuffle-cards-main">
              <div
                className="shuffle-card1"
                data-aos-duration="1000"
                data-aos="fade-right"
              >
                <Card1 isUsa={!isShuffle1} />
              </div>
              <div
                className="shuffle-arrow-reverse"
                data-aos-duration="1000"
                data-aos="fade-up"
                data-aos-delay="200"
                onClick={() => shuffle1()}
              >
                <img src={icons.arrowReverse} alt="" />
              </div>
              <div
                className="shuffle-card2"
                data-aos-duration="1000"
                data-aos="fade-left"
              >
                <Card1 isUsa={isShuffle1} />
              </div>
            </div>
          </div>
        </DetailWithPicture>
        <div className="advantage_section">
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

      <Footer />
    </>
  );
};
export default InternationalMoneyTransfer;
