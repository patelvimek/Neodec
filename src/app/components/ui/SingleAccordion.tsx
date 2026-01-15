"use client";
import React, { useState, ReactNode } from "react";

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

interface SingleAccordionProps {
    title: string;
    children: ReactNode;
    defaultOpen?: boolean;
    className?: string;
    headerClassName?: string;
    bodyClassName?: string;
}

export default function SingleAccordion({
    title,
    children,
    defaultOpen = false,
    className = "",
    headerClassName = "",
    bodyClassName = "",
}: SingleAccordionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={`glassBg glassBgLightAccordion ${className}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex w-full items-center justify-between p-6 text-left text-gray-300 text-xl font-normal hover:text-gray-200 transition-colors ${headerClassName}`}
                aria-expanded={isOpen}
            >
                <span>{title}</span>
                <ChevronIcon isOpen={isOpen} />
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className={`px-6 pb-6 text-gray-400 text-base font-normal ${bodyClassName}`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
