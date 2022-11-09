import "./style.css";
const Tag = ({ item, index }) => {
  return (
    <>
      <div
        className="tags"
        data-aos="fade-left"
        data-aos-delay={index*10}
        data-aos-duration="1000"
      >
        <div className="tag-number">{index + 1}</div>
        <div className="tag-heading">{item?.title}</div>
      </div>
    </>
  );
};
export default Tag;
