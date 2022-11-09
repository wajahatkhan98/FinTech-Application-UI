import GradientButton from "../gradientButton/GradientButton";
import "./style.css";


const DetailWithPicture = ({children}) => {
  return (
    <>
      <section className="detail-with-picture" >
        <div className="detail-with-picture-left" data-aos-duration="1000"
            data-aos="fade-left">
          <h2 className="detail-with-picture-heading size-56 gradient-text">
            Ease and security for your purchases
          </h2>
          <p className="detail-with-picture-para size-15">
            Through the application, access all information, including card
            data, statement and debits. When shopping on websites, you use the
            virtual card without having to provide the information of the
            physical version, with more security. The physical card can also be
            used for in-person and digital purchases, in addition to allowing
            cash withdrawals . When using the card in other currencies, you can
            simulate the amount that will be paid in dollars using the
            Mastercard currency conversion calculator.
          </p>
          <GradientButton buttonText={"Get Solix free account"} isIcon={true} />
        </div>
        <div className="detail-with-picture-right">
         {children}
        </div>
      </section>
    </>
  );
};
export default DetailWithPicture;
