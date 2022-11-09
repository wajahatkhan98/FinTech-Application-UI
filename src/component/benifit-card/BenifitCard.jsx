import "./style.css";
const BenifitCard = ({ children }) => {
  return (
    <>
      <div className="benifit-card" data-aos-duration="1000"
          data-aos="flip-right">
        <div className="benifit-card-inner">
          {children}
        </div>
      </div>
    </>
  );
};
export default BenifitCard;
