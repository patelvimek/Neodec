"use client";
import React from "react";
import { Button } from "@material-tailwind/react";
import { ReactNode } from "react";

interface CustomButtonProps {
	variant?: "filled" | "gradient" | "outlined" | "text";
	color?: "blue";
	size?: "sm" | "md" | "lg";
	children: ReactNode;
	className?: string;
	onClick?: () => void;
	fullWidth?: boolean;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
}

export default function CustomButton({
	variant = "filled",
	color = "blue",
	size = "md",
	children,
	className = "",
	onClick,
	fullWidth = false,
	disabled = false,
	type = "button",
}: CustomButtonProps) {
	let customClass = "";

	switch (variant) {
		case "text":
			customClass =
				"bg-transparent border-none text-white hover:shadow-none hover:bg-primary-900 focus:bg-primary-800 active:bg-primary-950";
			break;
		case "outlined":
			customClass = "bg-transparent border border-primary-500 text-primary-500";
			break;
		case "gradient":
			customClass = "bg-linear-to-bl from-primary-500 to-primary-300";
			break;
		default:
			customClass = "bg-primary-500 ";
			break;
	}
	switch (size) {
		case "sm":
			customClass += "py-2 px-4";
			break;
		case "md":
			customClass += "py-2.5 px-6";
			break;
		case "lg":
			customClass += "py-3 px-8";
			break;
	}

	return (
		<Button
			variant={variant}
			color={color}
			size={size}
			onClick={onClick}
			fullWidth={fullWidth}
			disabled={disabled}
			type={type}
			className={`text-black rounded-full capitalize text-sm font-medium box-shadow-none hover:shadow-primary-800 hover:shadow-md  ${customClass} ${className}`}
		>
			{children}
		</Button>
	);
}
