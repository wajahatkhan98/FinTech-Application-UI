import { securityList } from "../../utils/constants";
import SecurityCard from "../securityCard/SecurityCard";
import "./style.css";
const Security = () => {
  return (
    <>
      <section className="security-section">
        <h2
          data-aos-duration="500"
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          className="security-heading size-56"
        >
          cONVENIENCE AND sECURITY YOU CAN COUNT ON{" "}
        </h2>
        <ul
          className="security-card-list"
          // data-aos-duration="1000"
          // data-aos="flip-right"
          // data-aos-anchor-placement="center-bottom"
        >
          {securityList.map((item, index) => {
            return (
              <div key={item.heading+index} className="security-wrapperr">
                <SecurityCard key={item.heading} item={item} />;
              </div>
            );
          })}
        </ul>
        {/* <div
          data-aos-duration="500"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          className="subscribe-para"
        >
          Subscribe to our Newsletter for Latest news & Uppdates
        </div>
        <div
          data-aos-duration="1000"
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
          className="subscribe-input"
        >
          <div className="input">
            <input placeholder="Email Address" type="text" />
          </div>
          <button>Subscribe</button>
        </div> */}
      </section>
    </>
  );
};
export default Security;
