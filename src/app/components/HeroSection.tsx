import { Typography } from "@material-tailwind/react";
import ChipGhost from "./ui/ChipGhost";
import CustomButton from "./ui/Button";

export default function HeroSection() {
	return (
		<section className="container mx-auto px-4 h-svh flex items-center relative">
			<div className="flex flex-col justify-center items-center text-center gap-3 md:gap-2 lg:gap-6 h-[70vh] lg:h-[80vh] mx-auto md:px-10">
				<ChipGhost text="Decentralised" />
				<Typography
					variant="h1"
					className="text-white font-bold text-4xl leading-[3rem] lg:text-6xl lg:leading-[4.5rem] z-10"
				>
					Web3 <br />
					Finance Infrastructure for the Decentralized Era
				</Typography>
				<Typography
					variant="h6"
					className="text-gray-400 font-normal text-sm md:text-base mb-5 md:mb-2 md:w-2/3 mx-auto z-10"
				>
					Secure, scalable and decentralized solutions for your digital assets
					experience the future of financial freedom.
				</Typography>
				<div className="flex items-center gap-4">
					<CustomButton variant="filled" size="lg" className="text-base z-10">
						<span>Get Started</span>
					</CustomButton>
					<CustomButton
						variant="filled"
						size="lg"
						className="text-base glassBg text-white z-10"
					>
						<span>Watch video</span>
					</CustomButton>
				</div>
			</div>
		</section>
	);
}
