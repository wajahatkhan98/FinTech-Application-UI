import React from "react";
import "./style.css";
const ProductCard = ({icon,Heading,Para,style,icon1}) => {
  return (
    <div className="product-card-main">
      <div className="product-card-inner">
        <div className="icon-cicle">
            <div style={{...style}} className="product-icon-img">
                <img src={icon}  alt="" />
                <img src={icon1}  alt="" />
            </div>
        </div>
        <h2 className="product-card-heading size-56">{Heading}</h2>
        <p className="product-card-para size-15">
          To open your international Solix account, you must provide a fixed
          address in Brazil and a Brazilian or US telephone number. In addition,
          you must be over 18 years of age and present one of these valid
          identification documents: CNH (National Driver's License), RG (General
          Registration) or Brazilian Passport. Open your account now!
        </p>
        <span className="product-card-learn">Learn more</span>
      </div>
    </div>
  );
};

export default ProductCard;
