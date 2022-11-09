import React from "react";
import "./Solix.css";
import CreadCard from "../../assets/CreadCard.png";
import Phone from "../../assets/phone.png";
import Circles from "../../assets/Circles.png";
import Group from "../../assets/Group5.png";
import Tag from "../tags/Tag";
import { solixList } from "../../utils/constants";
import Card3d from "../../assets/3dCard.png";
import Phones from "../../assets/place-phone2.gif";
const Solix = () => {
  return (
    <>
      <section className="solix-apps">
        <div className="solix-app-row">
          <div className="solix-app-left-col">
            <div
              className="solix-app-text"
              data-aos-duration="1000"
              data-aos="fade-down"
            >
              <h1 className="size-56">
                Download the Solix app Open an Account in
              </h1>
              <h3 className="size-90">5 Minutes.</h3>
              <span className="square"></span>
            </div>
            {/* <div
              className="group-2"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              <img src={Group} alt="Group" />
            </div> */}
          </div>
          {/* <div className="solix-app-right-col">
            <img src={Phone} className="phone" alt="Group" />
          </div> */}
          <div className="warpper">
            <div
              className="group-2"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              <div className="atm-card">
                <img src={Card3d} alt="" />
              </div>
              <div className="images">
                <img src={Circles} />
              </div>
              <div className="phone-plane">
                <img src={Phones} alt="Group" />
              </div>
            </div>

            <div
              className="cirlce-dotted"
              data-aos-duration="1000"
              data-aos="fade-left"
            >
              <div className="circl-inner">
                {solixList.map((item, index) => (
                  <Tag item={item} key={item.title} index={index} />
                ))}
              </div>
              <div className="child-cicle"></div>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solix;
