'use client';
import Link from 'next/link';
import { Fragment } from 'react';

export interface BreadcrumbItem {
	text: string;
	url?: string;
}

interface SimpleBreadcrumbProps {
	items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: SimpleBreadcrumbProps) {
	return (
		<div className='flex flex-col'>
			<div className='sec-com'>
				<div className='container-lg'>
					<nav className='text-xs font-normal text-gray-800 md:text-sm' aria-label='Breadcrumb'>
						<ol className='flex flex-wrap items-center'>
							{items.map((item, index) => (
								<Fragment key={index}>
									<li
										className={`flex items-center ${index === items.length - 1 ? 'font-bold' : ''}`}
									>
										{item.url && index !== items.length - 1 ? (
											<Link href={item.url} className='hover:text-primary'>
												{item.text}
											</Link>
										) : (
											<span>{item.text}</span>
										)}
									</li>
									{index < items.length - 1 && <span className='mx-2'>&gt;</span>}
								</Fragment>
							))}
						</ol>
					</nav>
				</div>
			</div>
		</div>
	);
}
