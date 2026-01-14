import { Typography } from "@material-tailwind/react";

import Link from "next/link";
import Image from "next/image";
import NavList from "./NavList";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<div className="flex flex-col justify-center items-center text-center gap-6 py-10">
				<Link href="#" className="cursor-pointer inline-block">
					<Image src="/img/logo.svg" alt="Logo" width={110} height={30} />
				</Link>
				<NavList />
			</div>

			<div className="flex justify-between items-center text-center gap-6 py-6 border-t border-t-gray-800">
				<Typography
					variant="paragraph"
					className="text-gray-500 font-normal text-sm"
				>
					&copy; {currentYear} Your Company. All rights reserved.
				</Typography>
				<div className="flex items-center gap-6">
					<Link
						href="#"
						className="text-gray-500 font-normal text-sm hover:text-gray-400"
					>
						Privacy Policy
					</Link>

					<Link
						href="#"
						className="text-gray-500 font-normal text-sm hover:text-gray-400"
					>
						Terms of Service
					</Link>
				</div>
			</div>
		</footer>
	);
}
