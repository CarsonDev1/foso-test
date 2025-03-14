'use client';
import React from 'react';

interface SectionHeadingProps {
	title: string;
	className?: string;
}

export default function SectionHeading({ title, className = '' }: SectionHeadingProps) {
	return <h2 className={`text-2xl md:text-4xl font-extrabold leading-tight ${className}`}>{title}</h2>;
}
