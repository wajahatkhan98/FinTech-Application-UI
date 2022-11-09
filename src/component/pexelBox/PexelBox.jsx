import "./style.css";
const PexelBox = ({name,amount}) => {
  return (
    <div className="pexel-box" data-aos-duration="1000"
    data-aos="flip-right">
      <div className="pexel-box-inner">
        <h2 className="pexel-box-heading size-36">{name}</h2>
        <h2 className="pexel-number size-56 gradient-text">{amount}</h2>
      </div>
    </div>
  );
};
export default PexelBox;
