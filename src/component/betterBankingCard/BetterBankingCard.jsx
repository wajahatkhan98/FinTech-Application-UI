import GradientButton from "../gradientButton/GradientButton";
import "./style.css";
const BetterBankingCard = ({ heading1, heading2, para, icon, buttonText }) => {
  return (
    <>
      <div className="security-card-item1 ">
        <div className="security-card-inner">
          <div className="security-card-left">
            <h2 className="haading-security-card size-36">
              <span>{heading1}</span>
              <span>{heading2}</span>
            </h2>
            <p className="para-security-card size-15">{para}</p>
          </div>
          <div className="security-card-right">
            <div className="security-card-icon">
              <img src={icon} alt="" />
            </div>
            <GradientButton buttonText={"Learn more"} />
          </div>
        </div>
      </div>
    </>
  );
};
export default BetterBankingCard;
