import { cards, icons } from "../../utils/constants";
import BenifitCard from "../benifit-card/BenifitCard";
import "./style.css";
const BenifitLine = () => {
  return (
    <>
      <div className="benifit-line">
        <h2
          className="benifit-heading size-56"
          data-aos-duration="1000"
          data-aos="fade-right"
        >
          The benefits of going global with <span>Solix</span>
        </h2>
        <BenifitCard>
          <span className="benifit-icon">
            <img src={icons.cardIcon} alt="" />
          </span>
          <h2 className="benifit-card-heading">International Card</h2>
        </BenifitCard>
        <BenifitCard>
          <span className="benifit-icon">
            <img src={icons.exchangeIcon} alt="" />
          </span>
          <h2 className="benifit-card-heading">Exchange Transfers</h2>
        </BenifitCard>
      </div>
    </>
  );
};
export default BenifitLine;
