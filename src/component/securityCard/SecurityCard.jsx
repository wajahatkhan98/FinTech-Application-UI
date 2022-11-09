import "./style.css";
const SecurityCard = ({ item }) => {
  return (
    <>
      <div
        data-aos-duration="1000"
        data-aos="flip-left"
        data-aos-anchor-placement="center-bottom"
        className="security-card-item"
      >
        <img className="security-logo" src={item.img} alt="" />
        <h2 className="security-item-heading">{item?.heading}</h2>
        <p className="security-para">{item?.description}</p>
      </div>
    </>
  );
};
export default SecurityCard;
