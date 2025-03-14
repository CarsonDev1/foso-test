'use client';
import Badge from '@/app/components/common/badge';
import DynamicHeading from '@/app/components/common/dynamic-heading';
import PostMeta from '@/app/components/common/post-meta';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export interface BlogPost {
	title: string;
	category: string;
	date: string;
	readTime: string;
	slug?: string;
}

interface BlogGridProps {
	posts: BlogPost;
	index?: number;
}

export default function BlogGrid({ posts, index = 0 }: BlogGridProps) {
	return (
		<div className='relative'>
			<Link href={`/blog/${posts.slug || index}`} className='block'>
				<article className='group flex flex-col rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full bg-white hover:-translate-y-1'>
					<div className='overflow-hidden'>
						<div className='transition-transform duration-300 group-hover:scale-105'>
							<Image src='/images/feature-img.png' width={500} height={500} alt='feature-card' />
						</div>
					</div>
					<div className='p-3 relative flex flex-col'>
						<div className='space-y-4'>
							<Badge category={posts.category} />
							<DynamicHeading title={posts.title} />
							<PostMeta date={posts.date} readTime={posts.readTime} />
							<div className='flex items-center gap-2 text-[#667F93] hover:text-[#0F4F9E] transition-colors duration-300 group'>
								<span className='text-sm font-medium'>Khám phá thêm</span>
								<div className='group-hover:translate-x-1 transition-transform duration-300'>
									<ArrowRight className='w-4 h-4' />
								</div>
							</div>
						</div>
					</div>
				</article>
			</Link>
		</div>
	);
}
