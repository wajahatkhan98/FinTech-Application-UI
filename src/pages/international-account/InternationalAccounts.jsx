import React from "react";
import Banner1 from "../../component/Banner1/Banner1";
import BenifitLine from "../../component/benifit-line/BenifitLine";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/header/Header";
import ServiceCard from "../../component/serviceCard1/ServiceCard";
import HeroPhone from "../../assets/hero-phone2.gif";
import BankPhone from "../../assets/hero-phone.gif";
import "./style.css";
import ServiceCard2 from "../../component/serviceCard2/ServiceCard2";
import GradientButton from "../../component/gradientButton/GradientButton";
import { icons, InternationalAccountPoints } from "../../utils/constants";
import BenifitCard from "../../component/benifit-card/BenifitCard";
import Advantage from "../../component/advantage/Advantage";
import LineHeading from "../../component/lineHeading/LineHeading";
const InternationalAccounts = () => {
  return (
    <>
      <Header />
      <Banner1
        heading={"International"}
        heading1="Account"
        subheading={
          "Open your free US bank account without annoying paperwork within minutes"
        }
        buttonText="Order a Card"
        bgImage={"account-bg"}
      />
      <section className="mid-section">
        <BenifitLine />
        {/* <div className="mid-details">
					<div className="details-wrapper">
						<h2 className="deatails-heading size-90 gradient-text">
							Account Specs.
						</h2>
						<h3 className="deatails-sub-heading size-36">
							How does the global account works?
						</h3>
					</div>
				</div> */}
        <LineHeading
          heading={"Account Specs."}
          subHeading="How does the global account works?"
        />
        <div className="mid-details-bottom">
          <p
            className="details-para size-15"
            data-aos-duration="1000"
            data-aos="fade-right"
          >
            Open your free US bank account without annoying paperwork within
            minutes. Open your free US bank account without annoying paperwork
            within minutes. Open your free US bank account without annoying
            paperwork within minutes. Open your free US bank account without
            annoying paperwork within minutes. Open your free US bank account
            without annoying paperwork within minutes
          </p>
        </div>
      </section>
      <section className="mid-section2">
        <div className="left-phone">
          <img
            src={HeroPhone}
            alt=""
            data-aos-duration="1000"
            data-aos="fade-left"
          />
        </div>
        <div className="right-phone">
          <img
            src={BankPhone}
            alt=""
            data-aos-duration="1000"
            data-aos="fade-right"
          />
        </div>

        {/* <div className="details-wrapper">
            <h2 className="deatails-heading size-90 gradient-text">Benefits</h2>
            <h3 className="deatails-sub-heading size-36">
              Straight to the point
            </h3>
          </div> */}
        <LineHeading heading={"Benefits"} subHeading="Straight to the point" />

        <div className="mid2-details-bottom">
          <p className="details-para size-15" data-aos-duration="1000"
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
        </div>
      </section>

      <section className="mid-section3">
        <div className="mid3-details">
          <h2 className="mid3-details-heading size-90 gradient-text" data-aos-duration="1000"
          data-aos="fade-down">
            What are the main features of Solix International Account
          </h2>
          <p className="size-15" data-aos-duration="1000"
          data-aos="fade-left">
            You can carry out different types of international operations, such
            as: making transfers and currency exchange operations, having a
            virtual international debit card at no cost, international
            withdrawals and much more! See other details
          </p>
          <div className="international-card-list1">
            <div className="international-card-item1">
              <ServiceCard2 width={"53.2rem"}>
                <h2 className="service2-box-heading size-36">Free of Cost</h2>
                <p className="service2-box-para size-15">
                  É possível realizar operações de câmbio por meio do app da
                  Solix de forma fácil e rápida. Basta adicionar saldo em reais
                  por uma TED ou Pix do seu banco brasileiro, fazer a cotação
                  pelo app da Solix e converter o dinheiro para dólares,
                  aproveitando uma das menores taxas do mercado. Depois que a
                  conversão for identificada, o valor estará disponível em dólar
                  até o fim do próximo dia útil. Vale lembrar que o valor mínimo
                  para esse tipo de transação é de R$ 500, e o limite máximo é
                  personalizado para a sua necessidade.
                </p>
              </ServiceCard2>
            </div>
            <div style={{ marginTop: 0 }} className="international-card-item1">
              <ServiceCard2 width="53.2rem">
                <h2 className="service2-box-heading size-36">Free of Cost</h2>
                <p className="service2-box-para size-15">
                  É possível realizar operações de câmbio por meio do app da
                  Solix de forma fácil e rápida. Basta adicionar saldo em reais
                  por uma TED ou Pix do seu banco brasileiro, fazer a cotação
                  pelo app da Solix e converter o dinheiro para dólares,
                  aproveitando uma das menores taxas do mercado. Depois que a
                  conversão for identificada, o valor estará disponível em dólar
                  até o fim do próximo dia útil. Vale lembrar que o valor mínimo
                  para esse tipo de transação é de R$ 500, e o limite máximo é
                  personalizado para a sua necessidade.
                </p>
              </ServiceCard2>
            </div>
          </div>
          <ServiceCard2>
            <div className="service-card2-main">
              <div className="service-card2-left">
                <h2 className="heading-service-card2 size-36">
                  Aplicativo Solix
                </h2>
                <p className="para-service-card2 size-15">
                  Além de permitir que você faça câmbio e solicite o seu cartão,
                  o app Solix também possibilita a visualização de todas as
                  informações sobre sua conta internacional. Para acessar o
                  extrato mensal, basta seguir o caminho pelo app: Perfil
                  Documentos Conta Corrente Extratos mensais.
                </p>
              </div>
              <div className="service-card2-right">
                <ul className="service-card2-points">
                  {InternationalAccountPoints[0]
                    .split(";")
                    .map((item, index) => (
                      <li key={item + index} className="service-card2-point">
                        <img src={icons.checkIcon} alt="" />
                        <span className="size-15">{item};</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </ServiceCard2>
          <center className="service-button">
            <GradientButton buttonText={"Become Solix Partner"} isIcon={true} />
          </center>
        </div>
        <div className="mid-section3-bottom">
          <Advantage
            heading={"What do I need to open my international account?"}
            size="size-90"
            para={`To open your international Solix account, you must provide a fixed
            address in Brazil and a Brazilian or US telephone number. In
            addition, you must be over 18 years of age and present one of these
            valid identification documents: CNH (National Driver's License), RG
            (General Registration) or Brazilian Passport. Open your account now!`}
          />
          {/* <h2 className="mid-section3-heading size-90">
            What do I need to open my international account?
          </h2>
          <p className="size-15">
            To open your international Solix account, you must provide a fixed
            address in Brazil and a Brazilian or US telephone number. In
            addition, you must be over 18 years of age and present one of these
            valid identification documents: CNH (National Driver's License), RG
            (General Registration) or Brazilian Passport. Open your account now!
          </p>
          <div className="mid-section3-card-list">
            <BenifitCard>
              <span className="benifit-icon">
                <img src={icons.googlePlayIcon} alt="" />
              </span>
              <h2 className="benifit-card-heading">
                Download from Google Play
              </h2>
            </BenifitCard>
            <BenifitCard>
              <span className="benifit-icon">
                <img src={icons.appStoreIcon} alt="" />
              </span>
              <h2 className="benifit-card-heading">Download from App Store</h2>
            </BenifitCard>
          </div> */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default InternationalAccounts;
