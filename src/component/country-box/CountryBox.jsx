import "./style.css";
import flag from "../../assets/usa-flag.png";
import flagSvg from "../../assets/usa-flag.svg";
import flagSvg1 from "../../assets/brazil-flag.svg";
const CountrBox = ({ isUsa, price, text, props }) => {
  return (
    <>
      {console.log(props)}
      <div className="box-country" style={{ ...props }}>
        <div className="flag">
          <img src={isUsa ? flagSvg : flagSvg1} alt="" />
        </div>
        <p className="size-36">{price}</p>
        <span>{text}</span>
      </div>
    </>
  );
};
export default CountrBox;
