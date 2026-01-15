"use client";
import React, { useState } from "react";
import {
	Typography,
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
import Accordion from "./components/ui/Accordion";
import SingleAccordion from "./components/ui/SingleAccordion";
import Tabs from "./components/ui/Tabs";
import PlanCard from "./components/PlanCard";

export default function MainPage() {


	return (
		<>
			<section className="w-full h-screen min-h-max relative overflow-hidden">
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



				<section className="flex flex-col gap-9 py-20 mb-8">
					<div className="flex flex-col justify-center items-center text-center gap-5 md:w-2/3 md:mx-auto md:px-10 ">
						<ChipGhost text="Pricing" />
						<SectionTitle title="Flexible Plans for every need and budget" />
						<SectionSubText text="Choose the plan that's right for you." />
					</div>
					<Tabs
						tabs={[
							{
								id: "monthly",
								label: "Monthly",
								content: (
									<div className="grid grid-cols-12 gap-6">
										<PlanCard
											title="Starter Plan"
											description="Ideal for individuals and small teams getting started with financial automation."
											price="$499/mo"
											features={["Basic invoicing tools", "Unified finance dashboard", "Expense tracking", "Email support (standard)", "Essential reporting"]}
										/>
										<PlanCard
											title="Pro Plan"
											description="For growing businesses that need advanced tools and priority support."
											price="$999/mo"
											customButtonClass="bg-primary-500 hover:bg-primary-600 text-black"
											features={["Advanced invoicing tools", "Multi-currency support", "Team collaboration", "Priority support", "Advanced analytics"]}
										/>
										<PlanCard
											title="Enterprise Plan"
											description="Custom solutions for large organizations with complex requirements."
											price="$2,499/mo"
											features={["Custom integrations", "Dedicated account manager", "24/7 premium support", "Unlimited users", "Custom reporting"]}
										/>
									</div>
								),
							},
							{
								id: "yearly",
								label: "Yearly",
								content: (
									<div className="grid grid-cols-12 gap-6">
										<PlanCard
											title="Starter Plan"
											description="Ideal for individuals and small teams getting started with financial automation."
											price="$399/mo"
											features={["Basic invoicing tools", "Unified finance dashboard", "Expense tracking", "Email support (standard)", "Essential reporting"]}
										/>
										<PlanCard
											title="Pro Plan"
											description="For growing businesses that need advanced tools and priority support."
											price="$799/mo"
											customButtonClass="bg-primary-500 hover:bg-primary-600 text-black"
											features={["Advanced invoicing tools", "Multi-currency support", "Team collaboration", "Priority support", "Advanced analytics"]}
										/>
										<PlanCard
											title="Enterprise Plan"
											description="Custom solutions for large organizations with complex requirements."
											price="$1,999/mo"
											features={["Custom integrations", "Dedicated account manager", "24/7 premium support", "Unlimited users", "Custom reporting"]}
										/>
									</div>
								),
							},
						]}
						defaultTabId="monthly"
					/>
				</section>

				<section className="flex flex-col gap-9 py-20 mb-8">
					<div className="flex flex-col justify-center items-center text-center gap-5 md:w-2/3 md:mx-auto md:px-10 ">
						<ChipGhost text="Everything You Need to Know" />
						<SectionTitle title="Your Questions everything you need" />
					</div>
					<div className="flex flex-col gap-6">
						<SingleAccordion title="1. Seamless access to liquidity and capital" defaultOpen={false}>
							Isolate your keys with the leading battle-tested security technology for hot and cold wallets.
						</SingleAccordion>

						<SingleAccordion title="2. How secure is the platform?" defaultOpen={false}>
							Isolate your keys with the leading battle-tested security technology for hot and cold wallets.
						</SingleAccordion>

						<SingleAccordion title="3. Do you support global operations?" defaultOpen={false}>
							Isolate your keys with the leading battle-tested security technology for hot and cold wallets.
						</SingleAccordion>
					</div>
					<div className="text-center">
						<CustomButton
							variant="filled"
							size="lg"
							className="text-base glassBg text-white z-10"
						>
							Contact Us
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
