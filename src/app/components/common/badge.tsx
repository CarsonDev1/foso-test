'use client';
import React from 'react';

interface BadgeProps {
	category: string;
	className?: string;
}

export default function Badge({ category, className = '' }: BadgeProps) {
	return (
		<span
			className={`text-[#0F4F9E] text-xs px-2 py-1 rounded-lg bg-[#E2F0FE] w-fit hover:bg-[#0F4F9E] hover:text-white transition-colors duration-300 ${className}`}
		>
			{category}
		</span>
	);
}
