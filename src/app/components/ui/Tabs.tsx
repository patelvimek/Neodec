"use client";
import React, { useState, ReactNode } from "react";

// Types for the tabs
export interface TabItem {
    id: string;
    label: string;
    content: ReactNode;
}

interface TabsProps {
    tabs: TabItem[];
    defaultTabId?: string;
    className?: string;
    headerClassName?: string;
    tabClassName?: string;
    activeTabClassName?: string;
    contentClassName?: string;
    fullWidth?: boolean;
}

export default function Tabs({
    tabs,
    defaultTabId,
    className = "",
    headerClassName = "",
    tabClassName = "",
    activeTabClassName = "",
    contentClassName = "",
    fullWidth = false,
}: TabsProps) {
    const [activeTab, setActiveTab] = useState(defaultTabId || tabs[0]?.id);

    const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

    return (
        <div className={`flex flex-col ${className}`}>
            {/* Tab Headers */}
            <div
                className={`inline-flex ${fullWidth ? "w-full" : "w-fit"} mx-auto p-2 rounded-full glassBg ${headerClassName}`}
            >
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                                ${fullWidth ? "flex-1" : ""}
                                ${isActive
                                    ? `bg-primary-500 text-black shadow-lg ${activeTabClassName}`
                                    : `text-gray-400 hover:text-gray-200 ${tabClassName}`
                                }
                            `}
                            role="tab"
                            aria-selected={isActive}
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Tab Content */}
            <div className={`mt-8 ${contentClassName}`}>
                <div key={activeTab} className="animate-fadeIn">
                    {activeContent}
                </div>
            </div>
        </div>
    );
}

