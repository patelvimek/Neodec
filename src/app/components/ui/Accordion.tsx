"use client";
import React, { useState, ReactNode } from "react";

// Types for the accordion
export interface AccordionItem {
	id: string | number;
	title: string;
	content: ReactNode;
}

interface AccordionProps {
	items: AccordionItem[];
	allowMultiple?: boolean;
	defaultOpenIds?: (string | number)[];
	className?: string;
	itemClassName?: string;
	headerClassName?: string;
	bodyClassName?: string;
}

interface AccordionItemProps {
	item: AccordionItem;
	isOpen: boolean;
	onToggle: () => void;
	headerClassName?: string;
	bodyClassName?: string;
	itemClassName?: string;
}

// Chevron Icon Component
function ChevronIcon({ isOpen }: { isOpen: boolean }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={2}
			stroke="currentColor"
			className={`${isOpen ? "rotate-180" : ""} h-5 w-5 transition-transform duration-300`}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M19.5 8.25l-7.5 7.5-7.5-7.5"
			/>
		</svg>
	);
}

// Single Accordion Item Component
function AccordionItemComponent({
	item,
	isOpen,
	onToggle,
	headerClassName = "",
	bodyClassName = "",
	itemClassName = "",
}: AccordionItemProps) {
	return (
		<div className={`glassBg glassBgLightAccordion ${itemClassName}`}>
			<button
				onClick={onToggle}
				className={`flex w-full items-center justify-between p-6 text-left text-gray-300 text-xl font-normal hover:text-gray-200 transition-colors ${headerClassName}`}
				aria-expanded={isOpen}
			>
				<span>{item.title}</span>
				<ChevronIcon isOpen={isOpen} />
			</button>
			<div
				className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
					}`}
			>
				<div className="overflow-hidden">
					<div className={`px-6 pb-6 text-gray-400 text-base font-normal ${bodyClassName}`}>
						{item.content}
					</div>
				</div>
			</div>
		</div>
	);
}

// Main Accordion Component
export default function Accordion({
	items,
	allowMultiple = false,
	defaultOpenIds = [],
	className = "",
	itemClassName = "",
	headerClassName = "",
	bodyClassName = "",
}: AccordionProps) {
	const [openIds, setOpenIds] = useState<(string | number)[]>(defaultOpenIds);

	const handleToggle = (id: string | number) => {
		if (allowMultiple) {
			setOpenIds((prev) =>
				prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
			);
		} else {
			setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
		}
	};

	return (
		<div className={`flex flex-col gap-4 ${className}`}>
			{items.map((item) => (
				<AccordionItemComponent
					key={item.id}
					item={item}
					isOpen={openIds.includes(item.id)}
					onToggle={() => handleToggle(item.id)}
					headerClassName={headerClassName}
					bodyClassName={bodyClassName}
					itemClassName={itemClassName}
				/>
			))}
		</div>
	);
}
