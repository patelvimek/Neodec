import { Typography } from "@material-tailwind/react";
import ChipGhost from "./ui/ChipGhost";
import CustomInput from "./ui/Input";
import CustomButton from "./ui/Button";

export default function Newsletter() {
	return (
		<div className="glassBg glassBgLighter p-14">
			<div className="flex flex-col justify-center items-center text-center gap-6">
				<ChipGhost text="Stay Ahead in Digital Finance " />
				<Typography
					variant="h3"
					className="text-gray-200 font-medium text-3xl capitalize"
				>
					Keep up to date with our Newsletter
				</Typography>
				<div className="relative flex w-full max-w-[35rem]">
					<CustomInput text="Enter your email address" className="w-full" />
					<CustomButton
						size="lg"
						className="!absolute right-2 top-1/2 -translate-y-1/2"
					>
						Subscribe
					</CustomButton>
				</div>
			</div>
		</div>
	);
}
