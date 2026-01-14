import { Typography } from "@material-tailwind/react";

export default function NavList() {
	return (
		<ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<Typography
				as="li"
				variant="small"
				className="flex items-center gap-x-2 p-1 font-medium text-gray-400 hover:text-gray-200"
			>
				<a href="#" className="flex items-center">
					Home
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				className="flex items-center gap-x-2 p-1 font-medium text-gray-400 hover:text-gray-200"
			>
				<a href="#" className="flex items-center">
					Features
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				className="flex items-center gap-x-2 p-1 font-medium text-gray-400 hover:text-gray-200"
			>
				<a href="#" className="flex items-center">
					Testimonial
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				className="flex items-center gap-x-2 p-1 font-medium text-gray-400 hover:text-gray-200"
			>
				<a href="#" className="flex items-center">
					FAQ
				</a>
			</Typography>
		</ul>
	);
}
