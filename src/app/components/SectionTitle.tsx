import { Typography } from "@material-tailwind/react";

interface SectionTitleProps {
	title?: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
	return (
		<Typography variant="h3" className="text-gray-200 font-medium text-3xl">
			{title}
		</Typography>
	);
}
