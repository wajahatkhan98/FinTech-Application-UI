import account from "../assets/account.png";
import atm from "../assets/atm.png";
import banking from "../assets/banking.png";
import desposit from "../assets/deposit.png";
import moneyTransfer from "../assets/money-transfer.png";
import suport from "../assets/support.png";
import investment from "../assets/investment.png";
import globe from "../assets/globe.png";
import easyuse from "../assets/easyuse.png";
import support24 from "../assets/support24.png";
import fix from "../assets/fix.png";
import funds from "../assets/funds.png";
import beating from "../assets/beating.png";
import cardIcon from "../assets/card.svg";
import accountIcon from "../assets/account.svg";
import IcardIcon from "../assets/Icard.svg";
import dollarIcon from "../assets/dollar.svg";
import transferIcon from "../assets/transfer.svg";
import exchangeIcon from "../assets/exchange.svg";
import checkIcon from "../assets/check.svg";
import googlePlayIcon from "../assets/google-play.svg";
import appStoreIcon from "../assets/app-store.svg";
import argentinaFlag from "../assets/flag-for-argentina.svg";
import brazilFlag from "../assets/brazil-flag.svg";
import usaFlag from "../assets/usa-flag.svg";
import arrowForward from "../assets/arrow-forward.svg";
import arrowReverse from "../assets/arrow-reverse.svg";
import productGlobe from "../assets/product_globe.svg";
import productCard from "../assets/product_card.svg";
import productTransfer from "../assets/product_transfer.svg";
import productTopUps from "../assets/product_topups.svg";
import productGlobeBlack from "../assets/product_globe_black.svg";
import productCardBlack from "../assets/product_card_black.svg";
import productTransferBlack from "../assets/product_transfer_black.svg";
import productTopUpsBlack from "../assets/product_topups_black.svg";
import missionIcon from "../assets/mission-icon.svg";
import visionIcon from "../assets/vision-icon.svg";
import communityIcon from "../assets/community-icon.svg";
import helpIcon from "../assets/help-icon.svg";
export const headerLinks = [
  {
    name: "Our Products",
    link: "/our-products",
    child: [
      {
        name: "International Account",
        link: "/international-accounts",
        child: [
          { name: "Get paid early", link: "/getpaid" },
          { name: "Interest on your money 1.5 APY", link: "/interest-money" },
        ],
      },
      { name: "International card", link: "/international-card", child: [] },
      {
        name: "Money transfer",
        link: "/international-money-transfer",
        child: [],
      },
      {
        name: "Mobile Top-Ups",
        link: "/internationlal-topups",
        child: [
          { name: "International Calling", link: "/international-calling" },
        ],
      },
    ],
  },
  {
    name: "Solix",
    link: "",
    child: [
      {
        name: "who we are",
        link: "/who-we-are",
        child: [],
      },
      {
        name: "partnership",
        link: "/partnership",
        child: [],
      },
      {
        name: "contact",
        link: "/contact",
        child: [],
      },
    ],
  },
  { name: "Community", child: [] ,link:"/community"},
  {
    name: "Help",

    child: [],
  },
  {
    name: "Log in",

    child: [],
  },
];
export const cards = [
  { title: "Ways of banking", image: banking },
  { title: "Us Bank Account", image: account },
  { title: "International Card", image: atm },
  { title: "Deposits", image: desposit },
  { title: "ATMs Support", image: suport },
  { title: "Money Transfer", image: moneyTransfer },
  { title: "Investments", image: investment },
];
export const securityList = [
  {
    img: beating,
    heading: "Bank beating rates",
    description: "centuries, but also the leap into electronic typesetting,",
  },
  {
    img: funds,
    heading: "Fund Transfer",
    description: "centuries, but also the leap into electronic typesetting,",
  },
  {
    img: support24,
    heading: "24/7 Support",
    description: "centuries, but also the leap into electronic typesetting,",
  },
  {
    img: globe,
    heading: "Global Reach",
    description: "centuries, but also the leap into electronic typesetting,",
  },
  {
    img: easyuse,
    heading: "Easy to use",
    description: "centuries, but also the leap into electronic typesetting,",
  },
  {
    img: fix,
    heading: "Fix your FX rates",
    description: "centuries, but also the leap into electronic typesetting,",
  },
];
export const solixList = [
  { title: "Registor for free." },
  { title: "Tell Us About Yourself." },
  { title: "Verify Your identity." },
  { title: "Fund Your Account." },
  { title: "Access Your Wallet." },
  { title: "Make Purchases and withdrawls." },
];
export const flagsIcon = {
  argentinaFlag,
  usaFlag,
  brazilFlag,
};
export const icons = {
  cardIcon,
  exchangeIcon,
  accountIcon,
  IcardIcon,
  dollarIcon,
  transferIcon,
  checkIcon,
  googlePlayIcon,
  appStoreIcon,
  arrowForward,
  arrowReverse,
  productGlobe,
  productCard,
  productTransfer,
  productTopUps,
  productGlobeBlack,
  productCardBlack,
  productTransferBlack,
  productTopUpsBlack,
  missionIcon,
  visionIcon,
  communityIcon,
  helpIcon
};
export const InternationalAccountPoints = [
  "Nome do titular da conta;Nome do banco parceiro americano;Código SWIFT;ABA/Routing Number;ACH Routing Number;Número da conta;Endereço do banco parceiro americano.",
];
