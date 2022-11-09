import React from 'react';
import Advantage from '../../component/advantage/Advantage';
import Banner1 from '../../component/Banner1/Banner1';
import Footer from '../../component/Footer/Footer';
import Header from '../../component/header/Header';
import GradientButton from '../../component/gradientButton/GradientButton';
import './style.css';
import { FAQ } from '../../component/faq/FAQ';

const GetPaid = () => {
	return (
		<>
			<Header />
			<Banner1
				heading={'Get paid early'}
				subheading="Get your free International card without annoying paperwork within minutes"
				heading1={false}
				buttonText="Top-Up Now"
				bgImage={'paid-early-bg'}
			/>
			<section className="Get-paid-container">
				<div className="get_paid_wrapper">
					<h3 className="get-paid-deatails-heading-sub size-36">
						Get Paid upto Two Days Early
					</h3>
				</div>
				<div className="get_paid_mid_bottom_details">
					<p className="para-details size-15">
						Don’t wait for payday. Sign up for early direct deposit and get your
						paycheck up to two days earlier. It’s quick and easy to get started.
					</p>
				</div>
				<center className="get-paid-button">
					<GradientButton
						buttonText={'Enjoy Solix free account'}
						isIcon={true}
					/>
				</center>
			</section>

			<section>
				<div className="advantage-component">
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

export default GetPaid;
