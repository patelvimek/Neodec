import { Chip } from "@material-tailwind/react";

interface ChipGhostProps {
	text?: string;
}

export default function ChipGhost({ text }: ChipGhostProps) {
	return (
		<>
			<Chip
				variant="ghost"
				color="green"
				size="sm"
				value={text}
				className="flex inline-block glassBg rounded-full px-4 py-2 mb-4 text-sm capitalize text-primary-500 font-medium border-0"
				icon={
					<span className="ml-3 mt-1 block h-2 w-2 rounded-full bg-primary-500 content-['']" />
				}
			/>
		</>
	);
}
