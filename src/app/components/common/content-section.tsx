'use client';
import React from 'react';
import {
	ContentSectionProps,
	ContentItem,
	ContentParagraph,
	ContentQuote,
	BulletList,
	ContentSubsection,
} from '@/types/content';

export default function ContentSection({
	title,
	titleNumber,
	content = [],
	className = '',
	titleClassName = 'text-primary font-extrabold text-xl',
	subtitleClassName = 'text-emerald-600 font-bold text-lg',
	paragraphClassName = 'text-lg',
	quoteClassName = 'border-l-4 border-emerald-500 pl-4 py-2 italic text-gray-700',
	bulletListClassName = 'list-disc pl-5 space-y-2',
	bulletPointClassName = 'text-lg',
}: ContentSectionProps) {
	const renderContent = {
		paragraph: (item: ContentParagraph, key: string) => (
			<p key={key} className={paragraphClassName}>
				{item.text}
			</p>
		),

		quote: (item: ContentQuote, key: string) => (
			<blockquote key={key} className={quoteClassName}>
				{item.text}
			</blockquote>
		),

		bulletList: (item: BulletList, key: string) => (
			<ul key={key} className={bulletListClassName}>
				{item.items.map((point, pointIndex) => (
					<li key={`${key}-point-${pointIndex}`} className={bulletPointClassName}>
						{point.text}
					</li>
				))}
			</ul>
		),

		subsection: (item: ContentSubsection, key: string) => (
			<div key={key} className='space-y-4'>
				<h4 className={subtitleClassName}>
					{item.subtitleNumber ? `${item.subtitleNumber} ` : ''}
					{item.subtitle}
				</h4>
				{item.content.map((subItem, subIndex) => renderContentItem(subItem, `${key}-sub-${subIndex}`))}
			</div>
		),
	};

	const renderContentItem = (item: ContentItem, key: string) => {
		const renderFunction = renderContent[item.type as keyof typeof renderContent];
		return renderFunction ? renderFunction(item as never, key) : null;
	};

	return (
		<div className={`space-y-4 md:space-y-6 ${className}`}>
			<h3 className={titleClassName}>
				{titleNumber !== undefined ? `${titleNumber}. ` : ''}
				{title}
			</h3>

			{content.map((item, index) => renderContentItem(item, `item-${index}`))}
		</div>
	);
}
