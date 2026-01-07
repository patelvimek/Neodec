import { Typography } from "@material-tailwind/react";
import LogoLoop from "../LogoLoop";

const imageLogos = [
	{
		src: "/img/logo-01.svg",
		alt: "Company 1",
		href: "https://company1.com",
	},
	{
		src: "/img/logo-02.svg",
		alt: "Company 2",
		href: "https://company2.com",
	},
	{
		src: "/img/logo-03.svg",
		alt: "Company 3",
		href: "https://company3.com",
	},
	{
		src: "/img/logo-04.svg",
		alt: "Company 2",
		href: "https://company2.com",
	},
	{
		src: "/img/logo-05.svg",
		alt: "Company 3",
		href: "https://company3.com",
	},
];

export default function TrustedPartners() {
	return (
		<div className="text-center py-12">
			<Typography
				variant="paragraph"
				className="text-gray-500 font-normal text-base leading-5 mb-8"
			>
				Globally Trusted Partners
			</Typography>

			<div className="overflow-hidden relative">
				<LogoLoop
					logos={imageLogos}
					speed={20}
					direction="left"
					logoHeight={33}
					gap={70}
					hoverSpeed={0}
					scaleOnHover
					fadeOut
					fadeOutColor="#0a0a0a"
					ariaLabel="Technology partners"
				/>
			</div>
		</div>
	);
}
