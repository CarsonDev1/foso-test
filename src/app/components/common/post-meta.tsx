'use client';
import React from 'react';
import { Calendar, Clock } from 'lucide-react';

interface PostMetaProps {
	date: string;
	readTime: string;
	className?: string;
}

export default function PostMeta({ date, readTime, className = '' }: PostMetaProps) {
	return (
		<div
			className={`flex items-start md:items-center gap-2 md:gap-4 text-xs md:text-sm text-[#667F93] ${className} flex-col sm:flex-row`}
		>
			<div className='flex items-center gap-1'>
				<Calendar className='size-4' />
				<span>{date}</span>
			</div>
			<span className='sm:block hidden'>|</span>
			<div className='flex items-center gap-1'>
				<Clock className='w-4 h-4' />
				<span>{readTime}</span>
			</div>
		</div>
	);
}
