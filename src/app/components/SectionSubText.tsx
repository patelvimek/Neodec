import { Typography } from "@material-tailwind/react";

interface SectionSubTextProps {
	text?: string;
}

export default function SectionSubText({ text }: SectionSubTextProps) {
	return (
		<Typography
			variant="h6"
			className="text-gray-500 font-normal text-base mb-6 md:w-2/3 md:mx-auto"
		>
			{text}
		</Typography>
	);
}
