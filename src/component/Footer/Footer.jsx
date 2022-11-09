import React from "react";
import "./Footer.css";
import Store from "../../assets/store.png";
import Google from "../../assets/google.svg";
import Apple from "../../assets/apple.svg";
import Facebook from "../../assets/facbook.png";
import Instagram from "../../assets/Instagram.png";
import Youtube from "../../assets/Youtube.png";
import Linkedin from "../../assets/Linkedin.png";
import Logo from "../../assets/solix-footer.png";

const Footer = () => {
  const links = [Facebook, Linkedin, Youtube, Instagram];
  const points = [
    "The SOLIX app facilitates banking services trough our partner bank an FDIC member, to provide certain financial services related to your access to banking functions on our platform.",
    "Delivery of these services is subject to identity verification by our partner bank",
    "Transfers of funds from Brazil to the United States are made through",
    "Solix Global Ltda. Whose company of the Solix business group, headquartered in Brazil.",
    "The Solix Card is issued by our partner bank an FDIC member, pursuant to a license from Visa U.S.A Inc.",
    "Transactions may be subject to limitations under applicable law, including the bank Secrecy Act and anti-money laundering laws.",
    "Please refer to our terms and conditions for more information.",
  ];
  return (
    <>
      <footer className="footer">
        <div
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
        </div>
        <div className="containerFooter">
          <img className="footer-logo" src={Logo} alt="" />
          <div className="row">
            <div className="footer-col">
              <ul>
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="footer-right">
              <div className="footer-top">
                <div className="footer-top-col">
                  <h4>Any questions</h4>
                  <ul>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Schedule</a>
                    </li>
                    <li>
                      <a href="#">Legal</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-top-col">
                  <h4>About Solix</h4>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Awards</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-bottom-col">
                <img src={Google} alt="" />
                <img src={Apple} alt="" />
              </div>
            </div>

            {/* <hr /> */}
          </div>
          <div className="footer-col-bottom">
            <h4>Connect</h4>
            <div className="social-links">
              {links.map((item, index) => (
                <a key={index} href="">
                  <img src={item} alt="" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
