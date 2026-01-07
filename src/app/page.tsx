"use client";
import React, { useState } from "react";
import {
	Typography,
	Accordion,
	AccordionHeader,
	AccordionBody,
	Input,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./components/Button";
import ChipGhost from "./components/ChipGhost";
import TrustedPartners from "./components/TrustedPartners";
import SectionTitle from "./components/SectionTitle";
import SectionSubText from "./components/SectionSubText";
import Header from "./components/Header";

export default function MainPage() {
	const [open, setOpen] = React.useState(0);

	const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

	function Icon({ id, open }: { id: number; open: number }) {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={2}
				stroke="currentColor"
				className={`${
					id === open ? "rotate-180" : ""
				} h-5 w-5 transition-transform`}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M19.5 8.25l-7.5 7.5-7.5-7.5"
				/>
			</svg>
		);
	}

	return (
		<>
			<div className="w-full h-screen min-h-max relative overflow-hidden">
				{/* <LightPillar
					topColor="#24FC5C"
					bottomColor="#711CFF"
					intensity={0.4}
					rotationSpeed={0.5}
					glowAmount={0.002}
					pillarWidth={5.5}
					pillarHeight={0.3}
					noiseIntensity={0.5}
					pillarRotation={120}
					interactive={false}
					mixBlendMode="normal"
					className="z-0"
				/> */}

				<div className="p-4 fixed top-0 left-0 w-full z-50">
					<Header />
				</div>

				<section className="container mx-auto px-4 my-20">
					<div className="flex flex-col justify-center items-center text-center gap-3 md:gap-2 lg:gap-6 h-[70vh] lg:h-[80vh] mx-auto md:p-10">
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
							Secure, scalable and decentralized solutions for your digital
							assets experience the future of financial freedom.
						</Typography>
						<div className="flex items-center gap-4">
							<CustomButton
								variant="filled"
								size="lg"
								className="text-base z-10"
							>
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
			</div>

			<section className="container mx-auto px-4">
				<TrustedPartners />
				<div className="flex flex-col gap-9 py-20 mb-8">
					<div className="flex flex-col justify-center items-center text-center gap-5 md:w-2/3 md:mx-auto md:px-10 ">
						<ChipGhost text="Decentralised" />
						<SectionTitle title="Powering the future of digital asset infrastructure" />
						<SectionSubText text="Secure, scalable, and decentralized solutions for your digital assets experience the future of financial freedom." />
					</div>
					<div className="grid grid-cols-12 gap-4">
						<div className="col-span-12 md:col-span-6 lg:col-span-5 p-6 glassBg glassBgLight min-h-[26rem] relative overflow-hidden">
							<Typography
								variant="h5"
								className="text-gray-200 font-medium text-xl mb-3"
							>
								Instant access to liquidity and capital
							</Typography>
							<Typography
								variant="h6"
								className="text-gray-500 font-normal text-base mb-3"
							>
								Unlock efficient capital movement with infrastructure built for
								speed and reliability.
							</Typography>
							<div className="absolute bottom-0 right-0">
								<Image
									src="/img/graph-01.svg"
									alt="Logo"
									width={400}
									height={254}
									className="w-full"
								/>
							</div>
						</div>
						<div className="col-span-12 md:col-span-6 lg:col-span-7 p-6 glassBg glassBgLight min-h-[26rem] relative overflow-hidden">
							<Typography
								variant="h5"
								className="text-gray-200 font-medium text-xl mb-3"
							>
								Instant access to liquidity and capital
							</Typography>
							<Typography
								variant="h6"
								className="text-gray-500 font-normal text-base mb-3"
							>
								Unlock efficient capital movement with infrastructure built for
								speed and reliability.
							</Typography>
							<div className="absolute top-1/2 -translate-y-1/3 left-0 right-0">
								<Image
									src="/img/ecosystem.svg"
									alt="Logo"
									width={676}
									height={201}
									className="w-full"
								/>
							</div>
						</div>
						<div className="col-span-12 md:col-span-6 lg:col-span-7 p-6 glassBg glassBgLight min-h-[26rem] relative overflow-hidden">
							<Typography
								variant="h5"
								className="text-gray-200 font-medium text-xl mb-3"
							>
								Instant access to liquidity and capital
							</Typography>
							<Typography
								variant="h6"
								className="text-gray-500 font-normal text-base mb-3"
							>
								Unlock efficient capital movement with infrastructure built for
								speed and reliability.
							</Typography>
							<div className="absolute bottom-0 left-10 right-10">
								<Image
									src="/img/graph-02.svg"
									alt="Logo"
									width={631}
									height={249}
									className="w-full"
								/>
							</div>
						</div>
						<div className="col-span-12 md:col-span-6 lg:col-span-5 p-6 glassBg glassBgLight min-h-[26rem] relative overflow-hidden">
							<Typography
								variant="h5"
								className="text-gray-200 font-medium text-xl mb-3"
							>
								Instant access to liquidity and capital
							</Typography>
							<Typography
								variant="h6"
								className="text-gray-500 font-normal text-base mb-3"
							>
								Unlock efficient capital movement with infrastructure built for
								speed and reliability.
							</Typography>
							<div className="absolute bottom-0 left-10 right-10">
								<Image
									src="/img/notifications.svg"
									alt="Logo"
									width={428}
									height={266}
									className="w-full"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-9 py-20 mb-8">
					<div className="flex flex-col justify-center items-center text-center gap-5 md:w-2/3 md:mx-auto md:px-10 ">
						<ChipGhost text="Decentralised" />
						<SectionTitle title="The future of finance is digital" />
						<SectionSubText text="Secure, scalable, and decentralized solutions for your digital assets experience the future of financial freedom." />
					</div>
					<div className="grid grid-cols-12 gap-6">
						<div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 glassBg glassBgLighter text-center gap-2">
							<Image
								src="/img/BoxIcon.svg"
								alt="Logo"
								width={56}
								height={56}
								className="mb-8 mx-auto"
							/>
							<Typography
								variant="h6"
								className="text-gray-200 font-medium text-lg mb-3"
							>
								Monetary freedom for all
							</Typography>
							<Typography
								variant="lead"
								className="text-gray-500 font-normal text-sm mb-3"
							>
								Digital assets reduce dependence on legacy financial
								intermediaries, empowering users with greater control
							</Typography>
						</div>
						<div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 glassBg glassBgLighter text-center gap-2">
							<Image
								src="/img/BoxIcon.svg"
								alt="Logo"
								width={56}
								height={56}
								className="mb-8 mx-auto"
							/>
							<Typography
								variant="h6"
								className="text-gray-200 font-medium text-lg mb-3"
							>
								Monetary freedom for all
							</Typography>
							<Typography
								variant="lead"
								className="text-gray-500 font-normal text-sm mb-3"
							>
								Digital assets reduce dependence on legacy financial
								intermediaries, empowering users with greater control
							</Typography>
						</div>
						<div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 glassBg glassBgLighter text-center gap-2">
							<Image
								src="/img/BoxIcon.svg"
								alt="Logo"
								width={56}
								height={56}
								className="mb-8 mx-auto"
							/>
							<Typography
								variant="h6"
								className="text-gray-200 font-medium text-lg mb-3"
							>
								Monetary freedom for all
							</Typography>
							<Typography
								variant="lead"
								className="text-gray-500 font-normal text-sm mb-3"
							>
								Digital assets reduce dependence on legacy financial
								intermediaries, empowering users with greater control
							</Typography>
						</div>
						<div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 glassBg glassBgLighter text-center gap-2">
							<Image
								src="/img/BoxIcon.svg"
								alt="Logo"
								width={56}
								height={56}
								className="mb-8 mx-auto"
							/>
							<Typography
								variant="h6"
								className="text-gray-200 font-medium text-lg mb-3"
							>
								Monetary freedom for all
							</Typography>
							<Typography
								variant="lead"
								className="text-gray-500 font-normal text-sm mb-3"
							>
								Digital assets reduce dependence on legacy financial
								intermediaries, empowering users with greater control
							</Typography>
						</div>
						<div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 glassBg glassBgLighter text-center gap-2">
							<Image
								src="/img/BoxIcon.svg"
								alt="Logo"
								width={56}
								height={56}
								className="mb-8 mx-auto"
							/>
							<Typography
								variant="h6"
								className="text-gray-200 font-medium text-lg mb-3"
							>
								Monetary freedom for all
							</Typography>
							<Typography
								variant="lead"
								className="text-gray-500 font-normal text-sm mb-3"
							>
								Digital assets reduce dependence on legacy financial
								intermediaries, empowering users with greater control
							</Typography>
						</div>
						<div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 glassBg glassBgLighter text-center gap-2">
							<Image
								src="/img/BoxIcon.svg"
								alt="Logo"
								width={56}
								height={56}
								className="mb-8 mx-auto"
							/>
							<Typography
								variant="h6"
								className="text-gray-200 font-medium text-lg mb-3"
							>
								Monetary freedom for all
							</Typography>
							<Typography
								variant="lead"
								className="text-gray-500 font-normal text-sm mb-3"
							>
								Digital assets reduce dependence on legacy financial
								intermediaries, empowering users with greater control
							</Typography>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-9 py-20 mb-8">
					<div className="flex flex-col justify-center items-center text-center gap-5 md:w-2/3 md:mx-auto md:px-10 ">
						<ChipGhost text="Decentralised" />
						<SectionTitle title="The future of finance is digital" />
						<SectionSubText text="Secure, scalable, and decentralized solutions for your digital assets experience the future of financial freedom." />
					</div>
					<div className="grid grid-cols-12 gap-6">
						<div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 glassBg glassBgLighter gap-2">
							<Typography
								variant="h3"
								className="text-gray-200 font-medium text-3xl mb-4"
							>
								Starter Plan
							</Typography>

							<Typography
								variant="lead"
								className="text-gray-500 font-normal text-sm mb-3"
							>
								Ideal for individuals and small teams getting started with
								financial automation.
							</Typography>

							<Typography
								variant="h3"
								className="text-gray-200 font-medium text-3xl my-11"
							>
								$499/mo
							</Typography>

							<CustomButton variant="filled" size="lg" className="w-full mb-11">
								<span>Get Started</span>
							</CustomButton>

							<ul className="flex flex-col gap-2 list-disc list-inside">
								<li className="text-gray-200 text-base">
									Basic invoicing tools
								</li>
								<li className="text-gray-200 text-base">
									Unified finance dashboard
								</li>
								<li className="text-gray-200 text-base">Expense tracking</li>
								<li className="text-gray-200 text-base">
									Email support (standard)
								</li>
								<li className="text-gray-200 text-base">Essential reporting</li>
							</ul>
						</div>
						<div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 glassBg glassBgLighter gap-2">
							<Typography
								variant="h3"
								className="text-gray-200 font-medium text-3xl mb-4"
							>
								Starter Plan
							</Typography>

							<Typography
								variant="lead"
								className="text-gray-500 font-normal text-sm mb-3"
							>
								Ideal for individuals and small teams getting started with
								financial automation.
							</Typography>

							<Typography
								variant="h3"
								className="text-gray-200 font-medium text-3xl my-11"
							>
								$499/mo
							</Typography>

							<CustomButton variant="filled" size="lg" className="w-full mb-11">
								<span>Get Started</span>
							</CustomButton>

							<ul className="flex flex-col gap-2 list-disc list-inside">
								<li className="text-gray-200 text-base">
									Basic invoicing tools
								</li>
								<li className="text-gray-200 text-base">
									Unified finance dashboard
								</li>
								<li className="text-gray-200 text-base">Expense tracking</li>
								<li className="text-gray-200 text-base">
									Email support (standard)
								</li>
								<li className="text-gray-200 text-base">Essential reporting</li>
							</ul>
						</div>
						<div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 glassBg glassBgLighter gap-2">
							<Typography
								variant="h3"
								className="text-gray-200 font-medium text-3xl mb-4"
							>
								Starter Plan
							</Typography>

							<Typography
								variant="lead"
								className="text-gray-500 font-normal text-sm mb-3"
							>
								Ideal for individuals and small teams getting started with
								financial automation.
							</Typography>

							<Typography
								variant="h3"
								className="text-gray-200 font-medium text-3xl my-11"
							>
								$499/mo
							</Typography>

							<CustomButton variant="filled" size="lg" className="w-full mb-11">
								<span>Get Started</span>
							</CustomButton>

							<ul className="flex flex-col gap-2 list-disc list-inside">
								<li className="text-gray-200 text-base">
									Basic invoicing tools
								</li>
								<li className="text-gray-200 text-base">
									Unified finance dashboard
								</li>
								<li className="text-gray-200 text-base">Expense tracking</li>
								<li className="text-gray-200 text-base">
									Email support (standard)
								</li>
								<li className="text-gray-200 text-base">Essential reporting</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-9 py-20 mb-8">
					<div className="flex flex-col justify-center items-center text-center gap-5 md:w-2/3 md:mx-auto md:px-10 ">
						<ChipGhost text="Decentralised" />
						<Typography
							variant="h3"
							className="text-gray-200 font-medium text-3xl"
						>
							Your Questions everything you need
						</Typography>
						<Typography
							variant="h6"
							className="text-gray-500 font-normal text-base mb-6 md:w-2/3 md:mx-auto"
						>
							Choose the plan that's right for you and start building your
							decentralized future today.
						</Typography>
					</div>
					<div className="flex flex-col gap-6">
						<Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
							<div className="glassBg glassBgLightAccordion p-6">
								<AccordionHeader
									onClick={() => handleOpen(1)}
									className="border-b-0 p-0 text-gray-300 text-xl font-normal hover:text-gray-200"
								>
									1. Seamless access to liquidity and capital
								</AccordionHeader>
								<AccordionBody className="p-0 pt-3 text-gray-400 text-base font-normal">
									We&apos;re not always in the position that we want to be at.
									We&apos;re constantly growing. We&apos;re constantly making
									mistakes. We&apos;re constantly trying to express ourselves
									and actualize our dreams.
								</AccordionBody>
							</div>
						</Accordion>

						<Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
							<div className="glassBg glassBgLightAccordion p-6">
								<AccordionHeader
									onClick={() => handleOpen(2)}
									className="border-b-0 p-0 text-gray-300 text-xl font-normal hover:text-gray-200"
								>
									1. Seamless access to liquidity and capital
								</AccordionHeader>
								<AccordionBody className="p-0 pt-3 text-gray-400 text-base font-normal">
									We&apos;re not always in the position that we want to be at.
									We&apos;re constantly growing. We&apos;re constantly making
									mistakes. We&apos;re constantly trying to express ourselves
									and actualize our dreams.
								</AccordionBody>
							</div>
						</Accordion>

						<Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
							<div className="glassBg glassBgLightAccordion p-6">
								<AccordionHeader
									onClick={() => handleOpen(3)}
									className="border-b-0 p-0 text-gray-300 text-xl font-normal hover:text-gray-200"
								>
									1. Seamless access to liquidity and capital
								</AccordionHeader>
								<AccordionBody className="p-0 pt-3 text-gray-400 text-base font-normal">
									We&apos;re not always in the position that we want to be at.
									We&apos;re constantly growing. We&apos;re constantly making
									mistakes. We&apos;re constantly trying to express ourselves
									and actualize our dreams.
								</AccordionBody>
							</div>
						</Accordion>
					</div>
					<div className="text-center">
						<CustomButton
							variant="filled"
							size="lg"
							className="text-base glassBg text-white z-10"
						>
							<span>Contact Us</span>
						</CustomButton>
					</div>
				</div>

				<div className="flex flex-col gap-9 py-20 mb-8">
					<div className="glassBg glassBgLighter p-14">
						<div className="flex flex-col justify-center items-center text-center gap-6">
							<ChipGhost text="Decentralised" />
							<Typography
								variant="h3"
								className="text-gray-200 font-medium text-3xl"
							>
								Keep up to date with our newsletter
							</Typography>
							<div className="relative flex w-full max-w-[35rem]">
								<Input
									type="text"
									placeholder="Email Address"
									className="h-[3.75rem] rounded-full !text-lg !border !border-gray-800/50 bg-gray-600/10 text-gray-500 pr-28 pl-5 shadow-none shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-600 placeholder:opacity-100 focus:!border-gray-800 focus:!border-t-gray-800 focus:ring-gray-600/10"
									labelProps={{
										className: "hidden",
									}}
									containerProps={{ className: "min-w-[100px] h-[3.75rem]" }}
									crossOrigin="true"
								/>
								<CustomButton
									size="lg"
									className="!absolute right-2 top-1/2 -translate-y-1/2"
								>
									Subscribe
								</CustomButton>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-center items-center text-center gap-6 py-10">
					<Link href="#" className="cursor-pointer inline-block">
						<Image src="/img/logo.svg" alt="Logo" width={110} height={30} />
					</Link>
					{/* {navList} */}
				</div>

				<div className="flex justify-between items-center text-center gap-6 py-6 border-t border-t-gray-800">
					<Typography
						variant="paragraph"
						className="text-gray-500 font-normal text-sm"
					>
						&copy; 2024 Your Company. All rights reserved.
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
			</section>
		</>
	);
}
