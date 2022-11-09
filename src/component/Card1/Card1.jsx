import { flagsIcon, icons } from "../../utils/constants";
import "./style.css";

export const Card1 = ({ isUsa }) => {
  return (
    <>
      <div className="card1-main">
        <div className="card1-main-left">
          <div className="card1-main-left-flag">
            <img
              src={isUsa ? flagsIcon.usaFlag : flagsIcon.brazilFlag}
              alt=""
            />
          </div>
          <div
            className="card1-arrow-forward"
            style={!isUsa ? { transform: "rotate(180deg)" } : {}}
          >
            <img src={icons.arrowForward} alt="" />
          </div>
        </div>
        <div className="card1-main-right">
          <p className="card1-main-right-para size-15">
            Lorem ipsum dolor sit, amet placeat!
          </p>
        </div>
      </div>
    </>
  );
};
