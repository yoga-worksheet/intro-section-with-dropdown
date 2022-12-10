import React from "react";
import hero_image_desktop from "../../assets/image-hero-desktop.png";
import hero_image_mobile from "../../assets/image-hero-mobile.png";
import client_databiz from "../../assets/client-databiz.svg";
import client_audiophile from "../../assets/client-audiophile.svg";
import client_meet from "../../assets/client-meet.svg";
import client_maker from "../../assets/client-maker.svg";

const Icon = ({ image, alt }) => {
	return (
		<div className="icon">
			<img className="w-full h-full" src={image} alt={alt} />
		</div>
	);
};

const Intro = () => {
	const screenWidth = window.innerWidth;

	return (
		<section className="md:flex md:flex-row-reverse md:min-h-screen md:justify-between w-full md:max-w-[80%] m-auto">
			<div className=" md:basis-1/3">
				<img
					className="w-full h-full object-contain"
					src={
						screenWidth < 640
							? hero_image_mobile
							: hero_image_desktop
					}
					alt="hero-image"
				/>
			</div>
			<div className="grid grid-cols-1 gap-5 md:basis-1/2 md:place-content-center md:gap-10 px-4 md:px-0 py-10 md:py-0 text-center md:text-left">
				<h1 className="text-[2.2rem] md:text-[4.5rem] font-[700] md:leading-none">
					Make {screenWidth > 640 && <br />} remote work
				</h1>
				<p className="text-[16px] md:w-[80%] font-[500] text-grayTheme ">
					Get your team in sync, no matter your location. Streamline
					processes, create team rituals, and watch productivity soar.
				</p>
				<button className="md:justify-self-start bg-blackTheme hover:bg-whiteTheme text-whiteTheme hover:text-blackTheme border border-blackTheme place-self-center py-3 px-5 rounded-xl ease-in-out duration-200">
					Learn more
				</button>
				<div className="flex justify-between items-center md:self-end gap-5 mt-10 md:mt-0 ">
					<Icon image={client_databiz} alt="client databiz" />
					<Icon image={client_audiophile} alt="client audiophile" />
					<Icon image={client_meet} alt="client meet" />
					<Icon image={client_maker} alt="client maker" />
				</div>
			</div>
		</section>
	);
};

export default Intro;
