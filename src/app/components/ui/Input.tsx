"use client";
import React from "react";
import { Input } from "@material-tailwind/react";

interface CustomInputProps {
	text: string;
	className?: string;
}

export default function CustomInput({ text, className }: CustomInputProps) {
	return (
		<Input
			type="text"
			placeholder={text}
			className={`h-[3.75rem] rounded-full !text-lg !border !border-gray-800/50 bg-gray-600/10 text-gray-600 pr-28 pl-5 shadow-none shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-600 placeholder:opacity-100 
            focus:!border-gray-800 focus:!border-t-gray-800 focus:ring-gray-600/10
            
            ${className}`}
			labelProps={{
				className: "hidden",
			}}
			containerProps={{ className: "min-w-[100px] h-[3.75rem]" }}
			crossOrigin="true"
		/>
	);
}
