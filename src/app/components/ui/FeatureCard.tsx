import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { FeatureCardProps } from "../../types/types";

export default function FeatureCard({
	title,
	text,
	imageSrc,
	className,
	width,
	height,
}: FeatureCardProps) {
	return (
		<div
			className={`col-span-12 md:col-span-6 lg:col-span-4 p-8 glassBg glassBgLighter text-center gap-2 ${className}`}
		>
			<Image
				src={imageSrc || "/bento-logo.png"}
				alt="Logo"
				width={width || 56}
				height={height || 56}
				className="mb-8 mx-auto"
			/>
			<Typography
				variant="h6"
				className="text-gray-200 font-medium text-lg mb-3 capitalize"
			>
				{title}
			</Typography>
			<Typography variant="lead" className="text-gray-500 font-normal text-sm">
				{text}
			</Typography>
		</div>
	);
}
