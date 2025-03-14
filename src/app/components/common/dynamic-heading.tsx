import React from 'react';

interface DynamicHeadingProps {
	title: string;
	textColor?: string;
	className?: string;
}

export default function DynamicHeading({ title, textColor = 'text-title', className = '' }: DynamicHeadingProps) {
	return <h2 className={`text-xl md:text-2xl font-bold ${textColor} ${className}`}>{title}</h2>;
}
