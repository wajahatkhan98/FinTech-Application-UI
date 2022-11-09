import React from "react";
import AlInOne from "../../component/allinone/AllInOne";
import Banner1 from "../../component/Banner1/Banner1";
import DetailWithPicture from "../../component/detailWithPicture/DetailWidthPicture";
import Header from "../../component/header/Header";
import SubHeadingWithLine from "../../component/subHeadingWithLine/SubHeadingWithLine";
import "./style.css";
import Circles from "../../assets/Circles.png";
import Card3d from "../../assets/3dCard.png";
import carbonSec from "../../assets/carbon_security.svg";
import SuitedMan from "../../assets/suited-man.png";
import BetterB from "../../component/BetterBanking/BetterB";
import BenifitLine from "../../component/benifit-line/BenifitLine";
import ServiceCard from "../../component/serviceCard1/ServiceCard";
import { icons } from "../../utils/constants";
import BetterCardList from "../../component/betterCardList/BetterCardList";
import Advantage from "../../component/advantage/Advantage";
import Footer from "../../component/Footer/Footer";
function WhoIsSolix() {
  return (
    <>
      <Header />
      <Banner1
        heading={"Who is Solix?"}
        subheading="Open your free US bank account without annoying paperwork within minutes"
        heading1={false}
        buttonText={false}
        bgImage={"who-is-solix-bg"}
      />
      <section className="partner-section column-center-all ">
        <h2 className="gradient-text size-56 partner-section-heading ">
          Become a part of globally growing network
        </h2>
        <AlInOne />
      </section>
      <div className="who-is-solix-bottom column-center-all">
        <div className="accessible-world flex-column">
          <h2 className="gradient-text size-90 accessible-heading">
            Accessible worldwide
          </h2>
          <SubHeadingWithLine text="Border less banking" />
          <div className="accessible-world-bottom justify-center">
            <div className="accessible-world-left">
              <p className="accessible-world-para color-white size-15">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
                <br />
                <br />
                Curabitur tempor quis eros tempus lacinia. Nam bibendum
                pellentesque quam a convallis. Sed ut vulputate nisi. Integer in
                felis sed leo vestibulum venenatis. Suspendisse quis arcu sem.
                Aenean feugiat ex eu vestibuluc posuere leo.
                <br />
                <br />
                Nam pulvinar blandit velit, id condimentum diam faucibus at.
                Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue
                felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus
                non odio. Sonsequat dictum risus dapibus a. Duis felis ante,
                varius in neque eu, tempor suscipit sem. Maecenas ullamcorper
                gravida sem sit amet cursus. Etiam pulvinar purus vitae justo
                pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris
                consequat tellus id tempus aliquet.
                <br />
                <br />
                Vestibulum dictum ultrices elit a luctus. Sed in ante ut leo
                congue posuere at sit amet ligula. Pellentesque eget augue nec
                nisl sodales blandit sed et sem. Aenean quis finibus arcu, in
                hendrerit purus. Praesent ac aliquet lorem. Morbi feugiat
                aliquam ligula, et vestibulum ligula hendrerit vitae. Sed ex
                lorem, pulvinar sed auctor sit amet, molestie a nibh. Ut euismod
                nisl arcu, sed placerat nulla volutpat aliquet. Ut id convallis
                nisl. Ut mauris leo, lacinia sed elit id, sagittis rhoncus odio.
                Pellentesque sapien libero, lobortis a placerat et, malesuada
                sit amet dui. Nam sem sapien, congue eu rutrum nec, pellentesque
                eget ligula.
              </p>
            </div>
            <div className="accessible-world-right">
              <div
                className="left-picture"
                data-aos-duration="1000"
                data-aos="fade-right"
              >
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
            </div>
          </div>
        </div>
        <div className="manifest-section justify-center">
          <div className="manifest-section-left">
            <div className="manifest-img">
              <img src={SuitedMan} alt="" />
            </div>
          </div>
          <div className="manifest-section-right">
            <h2 className="gradient-text size-90 accessible-heading">
              Menifest
            </h2>
            <SubHeadingWithLine text="Straight to the point" />
            <p className="accessible-world-para color-white size-15">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
              <br />
              <br />
              Curabitur tempor quis eros tempus lacinia. Nam bibendum
              pellentesque quam a convallis. Sed ut vulputate nisi. Integer in
              felis sed leo vestibulum venenatis. Suspendisse quis arcu sem.
              Aenean feugiat ex eu vestibuluc posuere leo.
              <br />
              <br />
              Nam pulvinar blandit velit, id condimentum diam faucibus at.
              Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue
              felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus
              non odio. Sonsequat dictum risus dapibus a. Duis felis ante,
              varius in neque eu, tempor suscipit sem. Maecenas ullamcorper
              gravida sem sit amet cursus. Etiam pulvinar purus vitae justo
              pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris
              consequat tellus id tempus aliquet.
              <br />
              <br />
              Vestibulum dictum ultrices elit a luctus. Sed in ante ut leo
              congue posuere at sit amet ligula. Pellentesque eget augue nec
              nisl sodales blandit sed et sem. Aenean quis finibus arcu, in
              hendrerit purus. Praesent ac aliquet lorem. Morbi feugiat aliquam
              ligula, et vestibulum ligula hendrerit vitae. Sed ex lorem,
              pulvinar sed auctor sit amet, molestie a nibh. Ut euismod nisl
              arcu, sed placerat nulla volutpat aliquet. Ut id convallis nisl.
              Ut mauris leo, lacinia sed elit id, sagittis rhoncus odio.
              Pellentesque sapien libero, lobortis a placerat et, malesuada sit
              amet dui. Nam sem sapien, congue eu rutrum nec, pellentesque eget
              ligula.
            </p>
          </div>
        </div>
        <div className="how-why column-center-all">
          <h2 className="how-why-heading size-90 color-white ">
            How & why we do?
          </h2>
          <p className="how-why-para size-15 color-white">
            To open your international Solix account, you must provide a fixed
            address in Brazil and a Brazilian or US telephone number. In
            addition, you must be over 18 years of age and present one of these
            valid identification documents: CNH (National Driver's License), RG
            (General Registration) or Brazilian Passport. Open your account now!
          </p>
          <div className="international-card-list">
            <div className="international-card-item">
              <ServiceCard
                heading={"Our Mission"}
                para="An international account with no opening or maintenance fees. Receive transfers via ACH and Wire, domestic and international, free of charge, in addition to transferring to other Solix accounts without fees and automatically. It is also possible to make international withdrawals without additional fees on our partner network All Point."
                img={icons.missionIcon}
              />
            </div>
            <div className="international-card-item">
              <ServiceCard
                heading={"Our Vision"}
                para="An international account with no opening or maintenance fees. Receive transfers via ACH and Wire, domestic and international, free of charge, in addition to transferring to other Solix accounts without fees and automatically. It is also possible to make international withdrawals without additional fees on our partner network All Point."
                img={icons.visionIcon}
              />
            </div>
          </div>
        </div>
        <div className="service-section justify-center">
          <div className="service-section-left">
            <h2 className="service-section-heading size-90 gradient-text line100">
              Our
              <br />
              Services
            </h2>
            <p className="size-15 color-white service-section-para">
              Through the application, access all information, including card
              data, statement and debits. When shopping on websites, you use the
              virtual card without having to provide the information of the
              physical version, with more security.
              <br />
              <br />
              The physical card can also be used for in-person and digital
              purchases, in addition to allowing cash withdrawals .
              <br />
              <br /> When using the card in other currencies, you can simulate
              the amount that will be paid in dollars using the Mastercard
              currency conversion calculator.
            </p>
          </div>
          <div className="service-section-right">
            <BetterCardList />
          </div>
        </div>
        <Advantage
          size={"size-90"}
          heading="What do I need to open my international account?"
          para={
            "To open your international Solix account, you must provide a fixed address in Brazil and a Brazilian or US telephone number. In addition, you must be over 18 years of age and present one of these valid identification documents: CNH (National Driver's License), RG (General Registration) or Brazilian Passport. Open your account now!"
          }
        />
      </div>
      <Footer />
    </>
  );
}

export default WhoIsSolix;
