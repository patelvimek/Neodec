import { Typography } from "@material-tailwind/react";
import Image from "next/image";

interface BentoCardProps {
	title?: string;
	text?: string;
	imageSrc?: string;
	className?: string;
	imageContainerClassName?: string;
	width?: number;
	height?: number;
}

export default function BentoCard({
	title,
	text,
	imageSrc,
	className,
	imageContainerClassName,
	width,
	height,
}: BentoCardProps) {
	return (
		<div
			className={`col-span-12 md:col-span-6 lg:col-span-5 p-6 glassBg glassBgLight min-h-[26rem] relative overflow-hidden ${className}`}
		>
			<Typography
				variant="h5"
				className="text-gray-200 font-medium text-xl mb-3 capitalize"
			>
				{title}
			</Typography>
			<Typography
				variant="h6"
				className="text-gray-500 font-normal text-base mb-3"
			>
				{text}
				and reliability.
			</Typography>
			<div className={`absolute  ${imageContainerClassName || ""}`}>
				<Image
					src={imageSrc || "/bento-logo.png"}
					alt="Logo"
					width={width || 100}
					height={height || 100}
					className="w-full"
				/>
			</div>
		</div>
	);
}
