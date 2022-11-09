import './App.css';
import './assets/global-style.css';
import Home from './pages/home/Home';
import InternationalMoneyTransfer from './pages/international-money-transfer/InternationalMoneyTransfer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetPaid from './pages/GetPaidEarly/GetPaid';
import InternationalCalling from './pages/International-calling/InternationalCalling';
import InterestMoney from './pages/Interest-on-money/InterustMoney';
import InternationalTopUps from './pages/international-mobile-top-up/InternationalTopUps';
import InternationalCard from './pages/international-card/InternationalCard';
import InternationalAccounts from './pages/international-account/InternationalAccounts';
import OurProducts from './pages/our-Products/OurProducts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import WhoIsSolix from './pages/whoIsSolix/WhoIsSolix';
import PartnerShip from './pages/partnetship/PartnerShip';
import Contact from './pages/contact/Contact';
import Community from './pages/community/Community';
function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/international-accounts/getpaid" element={<GetPaid />} />
					<Route
						path="/internationlal-topups/international-calling"
						element={<InternationalCalling />}
					/>
					<Route
						path="/international-accounts/interest-money"
						element={<InterestMoney />}
					/>
					<Route
						path="/internationlal-topups"
						element={<InternationalTopUps />}
					/>
					<Route path="/international-card" element={<InternationalCard />} />
					<Route
						path="/international-accounts"
						element={<InternationalAccounts />}
					/>
					<Route
						path="/international-money-transfer"
						element={<InternationalMoneyTransfer />}
					/>
					<Route path="/our-products" element={<OurProducts />} />
					<Route path="/who-we-are" element={<WhoIsSolix />} />
					<Route path="/partnership" element={<PartnerShip />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/community" element={<Community />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
