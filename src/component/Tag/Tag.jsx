import { flagsIcon } from "../../utils/constants";
import "./style.css";

const Tag = ({ icon, name }) => {
  return (
    <>
      <div className="tag-main">
        <div className="tag-img">
          <img src={icon || flagsIcon.brazilFlag} alt="" />
        </div>
        <span className="tag-name size-15">{name || "Branzil"}</span>
      </div>
    </>
  );
};
export default Tag;
