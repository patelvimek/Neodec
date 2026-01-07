import React, { useState } from "react";

import {
	Navbar,
	Typography,
	IconButton,
	Collapse,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./Button";

export default function Header() {
	const [openNav, setOpenNav] = useState(false);

	const navList = (
		<ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<Typography
				as="li"
				variant="small"
				className="flex items-center gap-x-2 p-1 font-medium text-gray-400"
			>
				<a href="#" className="flex items-center">
					Home
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				className="flex items-center gap-x-2 p-1 font-medium text-gray-400"
			>
				<a href="#" className="flex items-center">
					Features
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				className="flex items-center gap-x-2 p-1 font-medium text-gray-400"
			>
				<a href="#" className="flex items-center">
					Testimonial
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				className="flex items-center gap-x-2 p-1 font-medium text-gray-400"
			>
				<a href="#" className="flex items-center">
					FAQ
				</a>
			</Typography>
		</ul>
	);
	return (
		<Navbar className="w-full max-w-full py-3 px-5 rounded-3xl border-0 glassBg">
			<div className="flex items-center justify-between basis-full">
				<div className="flex items-center basis-1/3">
					<Link href="#" className="cursor-pointer inline-block">
						<Image src="/img/logo.svg" alt="Logo" width={110} height={30} />
					</Link>
				</div>
				<div className="hidden lg:flex basis-1/3 justify-center">{navList}</div>
				<div className="flex items-center justify-end gap-4 basis-1/3 ">
					<CustomButton variant="text" className="hidden lg:inline-block">
						<span>Log In</span>
					</CustomButton>
					<CustomButton variant="filled" className="hidden lg:inline-block">
						<span>Try For Free</span>
					</CustomButton>
				</div>
				<IconButton
					variant="text"
					className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
					ripple={false}
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							className="h-6 w-6"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</IconButton>
			</div>
			<Collapse open={openNav}>
				<div className="flex flex-col gap-5 py-4">
					{navList}
					<div className="flex items-center justify-center gap-4">
						<CustomButton variant="outlined" className="">
							<span>Log In</span>
						</CustomButton>
						<CustomButton variant="filled" className="">
							<span>Try For Free</span>
						</CustomButton>
					</div>
				</div>
			</Collapse>
		</Navbar>
	);
}
