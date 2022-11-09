import React from "react";
import Advantage from "../../component/advantage/Advantage";
import Banner1 from "../../component/Banner1/Banner1";
import Card3 from "../../component/card3/Card3";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/header/Header";
import LineHeading from "../../component/lineHeading/LineHeading";
import "./style.css";
const PartnerShip = () => {
  return (
    <>
      <Header />
      <Banner1
        heading={"Partnership"}
        subheading="Get your free International card without annoying paperwork within minutes"
        heading1={false}
        buttonText={"Be a Partner"}
        bgImage={"partnership-bg"}
      />
      <section className="win-win">
        <div className="win-win-left">
          <h2 className="win-win-heading size-90 gradient-text">
            It's Win Win
          </h2>
          <h3 className="win-win-sub-heading size-36 flex-column color-white">
            Ensure Success with Solix
          </h3>
          <p className="win-win-para size-15 color-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
        </div>
        <div className="win-win-right">
          <div className="win-win-card">
            <Card3 />
          </div>
          <div className="win-win-card">
            <Card3 />
          </div>
          <div className="win-win-card">
            <Card3 />
          </div>
        </div>
      </section>
      <Advantage
        size={"size-90"}
        heading="What do I need to open my international account?"
        para={
          "To open your international Solix account, you must provide a fixed address in Brazil and a Brazilian or US telephone number. In addition, you must be over 18 years of age and present one of these valid identification documents: CNH (National Driver's License), RG (General Registration) or Brazilian Passport. Open your account now!"
        }
      />
      <Footer />
    </>
  );
};

export default PartnerShip;
