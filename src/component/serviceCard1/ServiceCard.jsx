import "./style.css";
import OK from "../../assets/OK.svg";
const ServiceCard = ({ heading, para, img }) => {
  return (
    <>
      <div className="service-card1">
        <div className="service-card1-circle">
          <img src={img || OK} alt="" />
        </div>
        <div className="service1-box">
          <div className="service1-box-inner">
            <h2 className="service1-box-heading size-36">
              {heading || "Free of Cost"}
            </h2>
            <p className="service1-box-para size-15 color-white">
              {para ||
                `An international account with no opening or maintenance fees.
              Receive transfers via ACH and Wire, domestic and international,
              free of charge, in addition to transferring to other Solix
              accounts without fees and automatically. It is also possible to
              make international withdrawals without additional fees on our
              partner network All Point.`}
            </p>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceCard;
