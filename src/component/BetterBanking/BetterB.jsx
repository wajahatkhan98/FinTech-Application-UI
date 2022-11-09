import React, { useEffect, useState } from "react";
import BetterBankingCard from "../betterBankingCard/BetterBankingCard";
// import "./BetterB.css";
import "./style.css";
import { icons } from "../../utils/constants";
import BetterCardList from "../betterCardList/BetterCardList";
const BetterB = ({ heading, para }) => {
  const [scrollAmount, setScrollAmount] = useState(0);
  useEffect(() => {
    const handleScroll = () =>
      window.addEventListener("scroll", function () {
        var elementValue = document.querySelector(".slide-scroll");
        if (this.scrollY >= elementValue) {
          document.querySelector(".slide-scroll").classList.add("darkHeader");
        } else {
          document
            .querySelector(".slide-scroll")
            .classList.remove("darkHeader");
        }
      });
    return (_) => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollAmount]);
  return (
  
    <section className="slide-scroll darkHeader">
      <div className="container">
        <div className="custom-row waji ">
          <div className="waji-left">
            <h1 className="section-right size-90 gradient-text">
              {heading || "Better Banking is here to saves you time and money."}
            </h1>
            <p className="subpart size-60">
              {para || "With up to 2.50% APY and no account fees."}
            </p>
          </div>
          <BetterCardList />
        </div>
      </div>
    </section>
  );
};

export default BetterB;
