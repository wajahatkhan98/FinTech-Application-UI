import { icons } from "../../utils/constants";
import BenifitCard from "../benifit-card/BenifitCard";
import "./style.css";
const Advantage = ({ size ,heading,para}) => {
  return (
    <div className="advantage-main">
      <h2 className={`${size || "size-56"} advantage-heading`} data-aos-duration="1000"
          data-aos="fade-left">
        {heading}
      </h2>
      <p className="size-15 advantage-main-para" data-aos-duration="1000"
          data-aos="fade-right">
       {para}
      </p>

      <div className="mid-section3-card-list">
        <BenifitCard>
          <span className="benifit-icon">
            <img src={icons.googlePlayIcon} alt="" />
          </span>
          <h2 className="benifit-card-heading">Download from Google Play</h2>
        </BenifitCard>
        <BenifitCard>
          <span className="benifit-icon">
            <img src={icons.appStoreIcon} alt="" />
          </span>
          <h2 className="benifit-card-heading">Download from App Store</h2>
        </BenifitCard>
      </div>
    </div>
  );
};
export default Advantage;
