"use client";
import React, { useState } from "react";
import {
	Typography,
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";
import CustomButton from "./components/ui/Button";
import ChipGhost from "./components/ui/ChipGhost";
import TrustedPartners from "./components/TrustedPartners";
import SectionTitle from "./components/SectionTitle";
import SectionSubText from "./components/SectionSubText";
import Header from "./components/Header";
import BentoCard from "./components/ui/BentoCard";
import FeaturesGrid from "./components/FeaturesGrid";
import ScrollReveal from "./components/animation/ScrollReveal";
import Newsletter from "./components/Newsletter";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import LightPillar from "./components/animation/Lightpillars";

export default function MainPage() {
	const [open, setOpen] = useState(0);

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
			<section className="w-full h-screen min-h-max relative overflow-hidden">
				<LightPillar
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
				/>

				<Header />

				<HeroSection />
			</section>

			<div className="container mx-auto px-4">
				<TrustedPartners />

				<section className="flex flex-col gap-9 py-20 mb-8">
					<div className="flex flex-col justify-center items-center text-center gap-5 md:w-2/3 md:mx-auto md:px-10 ">
						<ChipGhost text="Decentralised" />
						<SectionTitle title="Powering the future of digital asset infrastructure" />
						<SectionSubText text="Secure, scalable, and decentralized solutions for your digital assets experience the future of financial freedom." />
					</div>
					<div className="grid grid-cols-12 gap-8">
						<BentoCard
							title="Instant access to liquidity and capital"
							text="Unlock efficient capital movement with infrastructure built for speed"
							imageSrc="/img/graph-01.svg"
							className="col-span-12 md:col-span-6 lg:col-span-5"
							imageContainerClassName="right-0 bottom-0"
						/>

						<BentoCard
							title="Build, scale, and manage your ecosystem"
							text="Launch and expand your digital asset ecosystem with confidence.
								Industry-tested security keeps your keys isolated while
								supporting growth at scale."
							imageSrc="/img/ecosystem.svg"
							className="col-span-12 md:col-span-6 lg:col-span-7"
							imageContainerClassName="left-0 right-0 bottom-10"
						/>

						<BentoCard
							title="Enterprise Grade Wallet Infrastructure"
							text="Purpose built self custody and qualified wallet solutions
								engineered for institutions. Advanced security ensures
								protection for assets in both storage."
							imageSrc="/img/graph-02.svg"
							className="col-span-12 md:col-span-6 lg:col-span-7"
							imageContainerClassName="left-10 right-10 bottom-0"
						/>

						<BentoCard
							title="Global, real-time asset settlement"
							text="Transfer instantly across borders with secure, real-time
								settlement and tested key isolation transaction."
							imageSrc="/img/notifications.svg"
							className="col-span-12 md:col-span-6 lg:col-span-5"
							imageContainerClassName="left-10 right-10 bottom-0"
						/>
					</div>
				</section>

				<section className="flex flex-col gap-8 py-20 mb-8">
					<div className="flex flex-col justify-center items-center text-center gap-5 md:w-2/3 md:mx-auto md:px-10 ">
						<ChipGhost text="Decentralised" />
						<SectionTitle title="The future of finance is digital" />
						<SectionSubText text="Secure, scalable, and decentralized solutions for your digital assets experience the future of financial freedom." />
					</div>
					<div className="grid grid-cols-12 gap-6">
						<FeaturesGrid />
					</div>
				</section>

				<section className="flex flex-col gap-8 py-20 mb-8">
					<ScrollReveal
						baseOpacity={0}
						enableBlur={true}
						baseRotation={8}
						blurStrength={20}
					>
						NeoFi is a global leader in digital asset infrastructure, delivering
						highly secure and scalable solutions for institutions and builders
						in the crypto ecosystem. Its offerings span regulated custody,
						lending and borrowing services, and foundational infrastructure
						designed to support the growing digital economy.
					</ScrollReveal>
				</section>

				<section className="flex flex-col gap-9 py-20 mb-8">
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
				</section>

				<section className="flex flex-col gap-9 py-20 mb-8">
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
				</section>

				<section className="flex flex-col gap-9 py-20 mb-8">
					<Newsletter />
				</section>
				<Footer />
			</div>
		</>
	);
}
