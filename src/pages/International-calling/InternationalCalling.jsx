import React from 'react';
import Advantage from '../../component/advantage/Advantage';
import Banner1 from '../../component/Banner1/Banner1';
import DetailWithList from '../../component/detailWithList/DetailWithList';
import { FAQ } from '../../component/faq/FAQ';
import Footer from '../../component/Footer/Footer';
import Header from '../../component/header/Header';
import LineHeading from '../../component/lineHeading/LineHeading';
import ServiceCard from '../../component/serviceCard1/ServiceCard';
import './style.css';
const InternationalCalling = () => {
	return (
		<>
			<Header />
			<Banner1
				heading={'International'}
				subheading="Get your free International card without annoying paperwork within minutes"
				heading1={'Calling'}
				buttonText="Top-Up Now"
				bgImage={'calling-bg'}
			/>
			<section className="calling-container">
				{/* <div className="details-calling">
          <div className="wrapper-calling">
            <h2 className="deatails-heading size-90 gradient-text">Benefits</h2>
            <h3 className="deatails-heading-sub size-36">
              International Calling all over the world
            </h3>
          </div>
        </div> */}
				<LineHeading
					style={{ marginTop: '10rem' }}
					heading={'Benefits'}
					subHeading="International Calling all over the world"
				/>
				<div className="mid2-bottom-details">
					<p
						className="para-details size-15"
						data-aos-duration="1000"
						data-aos="fade-left"
					>
						You follow everything through the app and have access to several
						services: transfers , payments, exchange. Uncomplicated and global,
						as it should be.
					</p>
				</div>
				<div className="international-card-list">
					<div>
						<ServiceCard />
					</div>
					<div>
						<ServiceCard />
					</div>
				</div>
			</section>
			<DetailWithList />
			<section className="section-2-calling">
				<div>
					<Advantage
						heading={'Take Advantage of Solix Account'}
						para={` To open your international Solix account, you must provide a fixed
         					address in Brazil and a Brazilian or US telephone number. In addition,
         					you must be over 18 years of age and present one of these valid
         					identification documents: CNH (National Driver's License), RG (General
         					Registration) or Brazilian Passport. Open your account now!`}
					/>
				</div>
			</section>
			<FAQ />

			<Footer />
		</>
	);
};

export default InternationalCalling;
