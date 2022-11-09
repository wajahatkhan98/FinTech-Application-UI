import OK from "../../assets/OK.svg";
import "./style.css";
const ContaCards = () => {
  return (
    <>
      <div className="conta-card">
        <div className="img-cirlce">
          <img className="circle-img" src={OK} alt="" />
        </div>
        <div className="card-content">
          <h2>100% digital</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            vestibulum, arcu eget blandit convallis, lorem nisi vestibulum nunc,
            non sagittis purus leo dictum leo
          </p>
        </div>
      </div>
    </>
  );
};
export default ContaCards;
