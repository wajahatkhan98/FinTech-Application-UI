import './style.css';
import group from '../../assets/earth.png';
import HeroPhone from '../../assets/hero-phone2.gif';
import HeroCard from '../../assets/hero-card.png';
import CountrBox from '../country-box/CountryBox';
import Arrows from '../../assets/arrow-reverse.png';
import Pin from '../../assets/star.svg';
import { useState } from 'react';
const Banner = () => {
	const [isShuffle, setIsShuffle] = useState(false);
	const shuffle = () => {
		setIsShuffle(!isShuffle);
	};
	return (
		<>
			<section className="banner">
				<div
					className="banner-right"
					data-aos-duration="1000"
					data-aos-delay="200"
					data-aos="fade-right"
				>
					<h1 className="banner-heading">
						<span className="size-90">Smart,</span>
						<span className="size-90">Digital,</span>
						<span className="size-90">Simple.</span>
					</h1>
					<div className="right-body">
						<p className="banner-desc size-36">
							Open your free US bank account without annoying paperwork within
							minutes
						</p>
						<h2 className="banner-fee size-48">
							Say Goodbye to monthly <span>fees.</span>
						</h2>
						<div className="right-bottom">
							<button className="demo-btn">
								Request A Demo{' '}
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
										fill="black"
									/>
								</svg>
							</button>
							<span className="banner-learn">Learn more</span>
						</div>
					</div>
				</div>
				<div
					className="banner-left"
					// data-aos-duration="1000"
					// data-aos-delay="300"
					// data-aos="fade-left"
				>
					{/* <div className="pins">
            <div className="pin1">
              <img src={Pin} alt="" />
            </div>
            <div className="pin2">
              <img src={Pin} alt="" />
            </div>
          </div> */}
					<div className="content">
						<div className="phone-img">
							<img src={HeroPhone} alt="" />
						</div>
						<div
							data-aos-duration="1000"
							data-aos-delay="300"
							data-aos="fade-left"
							className="hero-card"
						>
							<img src={HeroCard} alt="" />
						</div>
						<div className="bottom">
							<div
								id="card1"
								className={!isShuffle ? 'country-card1' : 'country-card2'}
							>
								<CountrBox isUsa={false} price="R$ 5.103,71" text="Reals" />
							</div>
							<div onClick={() => shuffle()} className="arrow-reverse">
								<img src={Arrows} alt="" />
							</div>
							<div
								id="card2"
								className={isShuffle ? 'country-card1' : 'country-card2'}
							>
								<CountrBox isUsa={true} price="$ 1.002,30" text="USD" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Banner;
