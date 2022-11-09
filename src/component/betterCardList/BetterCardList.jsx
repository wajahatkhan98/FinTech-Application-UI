import React from "react";
import { icons } from "../../utils/constants";
import BetterBankingCard from "../betterBankingCard/BetterBankingCard";

const BetterCardList = () => {
  return (
    <div className="better-card-list">
      <section className="slides">
        <div className="custom-row wajji2">
          <div className="col-custom-6">
            <div className="cardBetter one">
              <BetterBankingCard
                heading1="International"
                heading2="Account"
                para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum, arcu eget blandit convallis, lorem nisi vestibulum nunc, non sagittis purus leo dictum leo."
                icon={icons.accountIcon}
              />
            </div>
            <div className="cardBetter two">
              <BetterBankingCard
                heading1="International"
                heading2="Card"
                para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum, arcu eget blandit convallis, lorem nisi vestibulum nunc, non sagittis purus leo dictum leo."
                icon={icons.IcardIcon}
              />
            </div>
            <div className="cardBetter three">
              <BetterBankingCard
                heading1="Money"
                heading2="Transfer"
                para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum, arcu eget blandit convallis, lorem nisi vestibulum nunc, non sagittis purus leo dictum leo."
                icon={icons.dollarIcon}
              />
            </div>
            <div className="cardBetter four">
              <BetterBankingCard
                heading1="Mobile"
                heading2="Top-Ups"
                para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum, arcu eget blandit convallis, lorem nisi vestibulum nunc, non sagittis purus leo dictum leo."
                icon={icons.transferIcon}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BetterCardList;
