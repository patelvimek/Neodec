
export interface FeatureData {
    id: number;
    title: string;
    text: string;
    imageSrc: string;
}

export type FeatureCardProps = Omit<FeatureData, "id"> & {
    className?: string;
    width?: number;
    height?: number;
};