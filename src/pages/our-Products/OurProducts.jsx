import React from "react";
import Footer from "../../component/Footer/Footer";
import GradientButton from "../../component/gradientButton/GradientButton";
import Header from "../../component/header/Header";
import ProductCard from "../../component/product-card/ProductCard";
import { icons } from "../../utils/constants";
import "./style.css";
function OurProducts() {
  return (
    <>
      <Header style={"sticky"} />
      <section className="our-products-main">
        <div className="our-product-left our-products-left" data-aos-duration="1000"
              data-aos="fade-right">
          <h1 className="heading size-90">
            <span>Our Products</span>
          </h1>
          <br />
          <h2 className="sub-heading size-36">
            Open your free US bank account without annoying paperwork within
            minutes
          </h2>
          <GradientButton buttonText={"Open your Account"} />
        </div>
        <div className="our-products-right" data-aos-duration="1000"
              data-aos="fade-left">
          <ProductCard
            Heading={"International Account"}
            style={{ width: "17rem", height: "17rem" }}
            icon={icons.productGlobe}
            icon1={icons.productGlobeBlack}
          />
          <ProductCard
            Heading={"International Card"}
            style={{ width: "17rem", height: "17rem" }}
            icon={icons.productCard}
            icon1={icons.productCardBlack}
          />
          <ProductCard
            Heading={"Money Transfer"}
            style={{ width: "17rem", height: "17rem" }}
            icon={icons.productTransfer}
            icon1={icons.productTransferBlack}
          />
          <ProductCard
            Heading={"Mobile Transfer"}
            style={{ width: "17rem", height: "17rem" }}
            icon={icons.productTopUps}
            icon1={icons.productTopUpsBlack}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default OurProducts;
