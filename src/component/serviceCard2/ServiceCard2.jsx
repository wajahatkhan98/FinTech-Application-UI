import "./style.css";
import OK from "../../assets/OK.svg";
const ServiceCard2 = ({width,children}) => {
  return (
    <>
      <div className="service-card2">
        <div className="service-card2-circle"></div>
        <div className="service2-box" style={{width}} >
          <div className="service2-box-inner">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceCard2;
