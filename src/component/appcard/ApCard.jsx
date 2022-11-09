import "./style.css";
const AppCard = ({ title, Img }) => {
  return (
    <>
      <div data-aos-duration="500" data-aos="flip-left" className="card-box">
        <div className="box-inner">
          <img
            src={Img}
            className="box-image"
            alt=""
          />
          <p className="box-title size-15">{title}</p>
        </div>
      </div>
    </>
  );
};
export default AppCard;
