import React from "react";
import Banner1 from "../../component/Banner1/Banner1";
import BenifitLine from "../../component/benifit-line/BenifitLine";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/header/Header";
import ServiceCard from "../../component/serviceCard1/ServiceCard";
import yellowCard from "../../assets/tilt-card-yellow.svg";
import greenCard from "../../assets/tilt-card-green.svg";
import "./style.css";
import Tag from "../../component/Tag/Tag";
import { flagsIcon } from "../../utils/constants";
import DetailWithPicture from "../../component/detailWithPicture/DetailWidthPicture";
import PexelBox from "../../component/pexelBox/PexelBox";
import Advantage from "../../component/advantage/Advantage";
import Accordian from "../../component/accordian/Accordian";
import faqLogo from "../../assets/question-group.svg";
import { FAQ } from "../../component/faq/FAQ";
import Circles from "../../assets/Circles.png";
import Card3d from "../../assets/3dCard.png";
import carbonSec from "../../assets/carbon_security.svg";
import LineHeading from "../../component/lineHeading/LineHeading";
const InternationalCard = () => {
  return (
    <>
      <Header />
      <Banner1
        heading={"International"}
        subheading="Get your free International card without annoying paperwork within minutes"
        heading1={"Card"}
        buttonText="Order your Card"
        bgImage={"card-bg"}
      />
      <br />
      <section className="section2-mid ">
        <BenifitLine />
        <div className="details-mid">
          <div className="section2-mid-cards">
            <div className="section2-mid-left-card">
              <img src={yellowCard} alt="" />
            </div>
            <div className="section2-mid-right-card">
              <img src={greenCard} alt="" />
            </div>
          </div>
          {/* <div className="wrapper-details">
            <h2 className="deatails-heading size-90 gradient-text">Benefits</h2>
            <h3 className="deatails-heading-sub size-36">
              Straight to the point
            </h3>
          </div> */}
          <LineHeading
            heading={"Benefits"}
            subHeading="Straight to the point"
          />
        </div>
        <div className="mid2-bottom-details">
          <p className="para-details size-15" data-aos-duration="1000"
            data-aos="fade-right">
            You follow everything through the app and have access to several
            services: transfers , payments, exchange. Uncomplicated and global,
            as it should be.
          </p>
        </div>
        <div className="international-card-list">
          <div className="international-card-item">
            <ServiceCard />
          </div>
          <div className="international-card-item">
            <ServiceCard />
          </div>
          <div className="international-card-item">
            <ServiceCard />
          </div>
        </div>
      </section>
      <section className="mid-sections3">
        {/* <div className="details-wrapper3">
           <div className="details-mid3">
            <h2 className="deatails-heading size-90 gradient-text">Ease</h2>
            <h3 className="deatails-heading-sub size-36">
              How does the international Card work?
            </h3>
          </div> 
        </div> */}
        <LineHeading
          heading={"Ease"}
          subHeading="How does the international Card work?"
        />
        <div className="mid-bottom-details3">
          <p className="para-details size-15" data-aos-duration="1000"
            data-aos="fade-right">
            You follow everything through the app and have access to several
            services: transfers , payments, exchange. Uncomplicated and global,
            as it should be.
          </p>
          <div className="purchase-countries">
            <h2 className="purchase-countries-heading gradient-text size-36" data-aos-duration="1000"
            data-aos="fade-left">
              Make purchases and witdrawls from following countries:
            </h2>
            <div className="purchase-countries-list">
              <Tag icon={flagsIcon.argentinaFlag} name={"argentina"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"spain"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"pakistan"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"argentina"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"indonasia"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"argentina"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"spain"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"pakistan"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"argentina"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"indonasia"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"argentina"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"spain"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"pakistan"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"argentina"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"indonasia"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"argentina"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"spain"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"pakistan"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"argentina"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"indonasia"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"argentina"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"spain"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"pakistan"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"argentina"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"indonasia"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"argentina"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"spain"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"pakistan"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"argentina"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"indonasia"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"argentina"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"spain"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"pakistan"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"argentina"} />
              <Tag icon={flagsIcon.argentinaFlag} name={"indonasia"} />
            </div>
          </div>
        </div>
        <DetailWithPicture>
          <div className="left-picture" data-aos-duration="1000"
            data-aos="fade-right">
            <div className="card-and-check">
              <div className="carbon-sec-small">
                <img src={carbonSec} alt="" />
              </div>
              <div className="carbon-sec-large">
                <img src={carbonSec} alt="" />
              </div>
              <div className="left-picture-atm-card">
                <img src={Card3d} alt="" />
              </div>
            </div>
            <div className="pictures-circles">
              <img src={Circles} alt="" />
            </div>
          </div>

          <div className="left-picture1">
            <div className="card-and-check1">
              <div className="circles-group2">
                <div className="carbon-sec-small1">
                  <img src={carbonSec} alt="" />
                </div>
                <div className="carbon-sec-large1">
                  <img src={carbonSec} alt="" />
                </div>
              </div>

              <div className="left-picture-atm-card1">
                <img src={Card3d} alt="" />
              </div>
            </div>
            <div className="pictures-circles1">
              <img src={Circles} alt="" />
            </div>
          </div>
        </DetailWithPicture>
      </section>
      <section className="pixel-section">
        <div className="pixel-deniel">
          <h2 className="pexel-heading size-56 gradient-text" data-aos-duration="1000"
            data-aos="fade-down" >
            Limits available for the international Solix card
          </h2>
          <p className="pexel-para size-15"  data-aos-duration="1000"
            data-aos="fade-up">
            At Solix, you have an international debit card to make your
            purchases more conveniently and safely around the world. See our
            transaction limits below. If you wish, you can also request a limit
            increase for US purchase transactions. Just send an email to
            support@Solixglobal.com .
          </p>
          <div className="pexel-box-list">
            <PexelBox name="Daily" amount="5.000" />
            <PexelBox name="Monthly" amount="15.000" />
            <PexelBox name="Annualy" amount="50.000" />
          </div>
        </div>
      </section>
      <div className="advantage-section">
        <Advantage
          heading={"Take Advantage of Solix Account"}
          para={` To open your international Solix account, you must provide a fixed
			address in Brazil and a Brazilian or US telephone number. In addition,
			you must be over 18 years of age and present one of these valid
			identification documents: CNH (National Driver's License), RG (General
			Registration) or Brazilian Passport. Open your account now!`}
        />
      </div>
      <FAQ />
      <Footer />
    </>
  );
};

export default InternationalCard;
