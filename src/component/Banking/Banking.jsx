import React, { useState } from "react";
import "./Banking.css";
import Group from "../../assets/group2.png";
import BankPhone from "../../assets/hero-phone.gif";
import group from "../../assets/earth.png";
import HeroPhone from "../../assets/hero-phone2.gif";
import HeroCard from "../../assets/hero-card.png";
import CountrBox from "../country-box/CountryBox";
import Arrows from "../../assets/arrow-reverse.png";
const Banking = () => {
  const [isShuffle, setIsShuffle] = useState(false);
  const shuffle = () => {
    setIsShuffle(!isShuffle);
  };
  return (
    <>
      <section id="courses">
        <div
          className="left"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos="fade-right"
          data-aos-once="true"
        >
          <h1 className="size-90">INSTANT AND NO-FEES MONEY TRANSFERS</h1>
          <h3 className="size-36">
            The easiest & Fastest way to Transfer your money
          </h3>
          <p className="size-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            vestibulum, arcu eget blandit convallis, lorem nisi vestibulum nunc,
            non sagittis purus leo dictum leo.
          </p>
        </div>
        <div
          className="right"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos="fade-left"
        >
          <div className="group-5">
            {/* <div className="bank-phone">
              <img src={BankPhone} alt="Group" />
            </div> */}
            <div className="content" style={{}}>
              <div className="phone-img">
                <img src={BankPhone} alt="" />
              </div>
              {/* <div
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos="fade-left"
              className="hero-card"
            >
              <img src={HeroCard} alt="" />
            </div> */}
              <div className="bottom">
                <div
                  className={!isShuffle ? "country-card1" : "country-card2"}
                >
                  <CountrBox isUsa={false} price="R$ 5.103,71" text="Reals" />
                </div>
                <div onClick={() => shuffle()} className="arrow-reverse">
                  <img src={Arrows} alt="" />
                </div>
                <div
                className={isShuffle ? "country-card1" : "country-card2"}>
                  <CountrBox isUsa={true} price="$ 1.002,30" text="USD" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banking;
