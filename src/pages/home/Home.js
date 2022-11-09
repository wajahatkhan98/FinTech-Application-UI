import { useEffect, useState } from 'react';
import AlInOne from '../../component/allinone/AllInOne';
import Banking from '../../component/Banking/Banking';
import Banner from '../../component/banner/Banner';
import BetterB from '../../component/BetterBanking/BetterB';
import Carto from '../../component/Carto/Carto';
import Conta from '../../component/conta/Conta';
import Footer from '../../component/Footer/Footer';
import Header from '../../component/header/Header';
import Security from '../../component/security/Security';
import { Sidebar } from '../../component/sidebar/Sidebar';
import Solix from '../../component/Solix/Solix';
import GetPaid from '../GetPaidEarly/GetPaid';
import InterestMoney from '../Interest-on-money/InterustMoney';
import InternationalAccounts from '../international-account/InternationalAccounts';
import InternationalCalling from '../International-calling/InternationalCalling';
import InternationalCard from '../international-card/InternationalCard';
import InternationalTopUps from '../international-mobile-top-up/InternationalTopUps';
import InternationalMoneyTransfer from '../international-money-transfer/InternationalMoneyTransfer';

const Home = () => {
	// const [width, setWidth] = useState(window.innerWidth); // check width size of the window
	// const handleWindowSizeChange = () => {
	//   setWidth(window.innerWidth);
	//   const solixapprow=document.getElementsByClassName('solix-app-row');
	//   solixapprow[0].style.height=document.getElementsByClassName('cirlce-dotted')[0].offsetHeight
	// };

  // // call your useEffect
  // useEffect(() => {
  //   window.addEventListener("resize", handleWindowSizeChange);
  //   return () => {
  //     window.removeEventListener("resize", handleWindowSizeChange);
  //   };
  // }, [window.innerWidth]);
  return (
    <>
      {/* <BetterB /> */}

      <Header />
      <Banner />
      <AlInOne />
      <Conta />
      <Solix />
      <BetterB />
      <Carto />
      <Banking />
      <Security />

			<Footer />
		</>
	);
};
export default Home;
