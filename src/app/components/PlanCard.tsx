import { Typography } from "@material-tailwind/react";
import CustomButton from "./ui/Button";

interface PlanCardProps {
    title: string;
    description: string;
    price: string;
    features: string[];
    customButtonClass?: string;
}

export default function PlanCard({ title, description, price, features, customButtonClass }: PlanCardProps) {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 glassBg glassBgLighter gap-2">
            <Typography
                variant="h3"
                className="text-gray-200 font-medium text-3xl mb-4"
            >
                {title}
            </Typography>

            <Typography
                variant="lead"
                className="text-gray-500 font-normal text-sm mb-3"
            >
                {description}
            </Typography>

            <Typography
                variant="h3"
                className="text-gray-200 font-medium text-3xl my-11"
            >
                {price}
            </Typography>

            <CustomButton variant="filled" size="lg" className={`w-full mb-11 bg-gray-800 text-white ${customButtonClass}`}>
                Get Started
            </CustomButton>

            <ul className="flex flex-col gap-2 list-disc list-inside">
                {features.map((feature, index) => (
                    <li key={index} className="text-gray-400">
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
}
