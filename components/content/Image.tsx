import { Caption } from "./caption";
import NextImage from "next/image";

interface ImageProps {
	src: string;
	alt?: string;
	width?: number;
	height?: number;
	className?: string;
}

export async function Image({ src, alt, width, height, className }: ImageProps) {
	return (
		<span className='my-5 flex flex-col items-center'>
			<NextImage
				className={`rounded object-cover max-w-sm mx-auto border-inset ${className || ""}`}
				src={src}
				alt={alt ?? ""}
				width={(width && width) || "1000"}
				height={(height && height) || "1000"}
			/>
			{alt && <Caption>{alt}</Caption>}
		</span>
	);
}
