import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CaptionedImageProps {
	src: StaticImageData;
	alt?: string;
	caption: string;
	width?: number;
	height?: number;
	className?: string;
	imageClassName?: string;
	captionClassName?: string;
}

export default function CaptionedImage({
	src,
	alt = 'image',
	caption,
	width = 900,
	height = 600,
	className = '',
	imageClassName = 'w-full rounded-md',
	captionClassName = 'text-base text-[#667F93]',
}: CaptionedImageProps) {
	return (
		<div className={`flex flex-col items-center gap-2 ${className}`}>
			<Image src={src} width={width} height={height} alt={alt} className={imageClassName} />
			<span className={captionClassName}>{caption}</span>
		</div>
	);
}
