import { FeatureData } from "../types/types";
import FeatureCard from "./FeatureCard";

const featureData: FeatureData[] = [
	{
		id: 1,
		title: "Monetary freedom",
		text: "Digital assets reduce dependence on legacy financial intermediaries, empowering users.",
		imageSrc: "/img/boxIcon.svg",
	},
	{
		id: 2,
		title: "Transparency by design",
		text: "On-chain activity enables real-time auditability, risk visibility, and verification..",
		imageSrc: "/img/boxIcon.svg",
	},
	{
		id: 3,
		title: "Borderless and always On",
		text: "24/7 markets and programmable money unlock instant settlement and global access.",
		imageSrc: "/img/boxIcon.svg",
	},
	{
		id: 4,
		title: "Secure and scarce",
		text: "Digitally native assets are secured by cryptography and designed.",
		imageSrc: "/img/boxIcon.svg",
	},
	{
		id: 5,
		title: "Infrastructure for innovation",
		text: "From tokenized real-world assets to institutional staking the building blocks.",
		imageSrc: "/img/boxIcon.svg",
	},
	{
		id: 6,
		title: "Monetary freedom",
		text: "Digital assets reduce dependence on legacy financial intermediaries, empowering users.",
		imageSrc: "/img/boxIcon.svg",
	},
];

export default function FeaturesGrid() {
	return (
		<>
			{featureData.map((feature) => (
				<FeatureCard
					key={feature.id}
					title={feature.title}
					text={feature.text}
					imageSrc={feature.imageSrc}
				/>
			))}
		</>
	);
}
