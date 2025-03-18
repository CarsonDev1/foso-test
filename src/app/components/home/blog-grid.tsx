'use client';
import Badge from '@/app/components/common/badge';
import DynamicHeading from '@/app/components/common/dynamic-heading';
import PostMeta from '@/app/components/common/post-meta';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

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
	const [isHovered, setIsHovered] = useState(false);

	// Hiệu ứng animation mũi tên chính
	const arrowVariants = {
		animate: {
			x: [0, 5, 0],
			transition: {
				duration: 1.2,
				repeat: Infinity,
				ease: 'easeInOut',
			},
		},
		initial: {
			x: 0,
		},
	};

	// Hiệu ứng của dấu mũi tên trailing (đuôi)
	const trailingArrowVariants = {
		animate: {
			opacity: [0, 0.7, 0],
			x: [-5, 15],
			transition: {
				duration: 1.2,
				repeat: Infinity,
				ease: 'easeOut',
				times: [0, 0.5, 1],
			},
		},
		exit: {
			opacity: 0,
			transition: { duration: 0.2 },
		},
	};

	// Hiệu ứng glow khi hover card
	const glowVariants = {
		hidden: {
			boxShadow: '0 0 0 rgba(15, 79, 158, 0)',
			y: 0,
		},
		visible: {
			y: -8,
			transition: {
				duration: 0.3,
				ease: 'easeOut',
			},
		},
	};

	// Hiệu ứng shine cho ảnh
	const shineVariants = {
		hidden: {
			opacity: 0,
			x: '-100%',
		},
		visible: {
			opacity: [0, 0.5, 0],
			x: '100%',
			transition: {
				duration: 1.5,
				ease: 'easeInOut',
			},
		},
	};

	return (
		<motion.div
			className='relative'
			initial='hidden'
			whileHover='visible'
			animate={isHovered ? 'visible' : 'hidden'}
			variants={glowVariants}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
		>
			<Link href={`/blog/${posts.slug || index}`} className='block'>
				<article className='group flex flex-col rounded-2xl overflow-hidden bg-white h-full relative'>
					<div className='overflow-hidden relative'>
						<AnimatePresence>
							{isHovered && (
								<motion.div
									className='absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent z-10 pointer-events-none'
									initial='hidden'
									animate='visible'
									exit='hidden'
									variants={shineVariants}
								/>
							)}
						</AnimatePresence>

						<motion.div
							className='transition-all duration-500'
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.08 }}
						>
							<Image src='/images/feature-img.png' width={500} height={500} alt='feature-card' />
						</motion.div>
					</div>

					<div className='p-3 relative flex flex-col'>
						<div className='space-y-4'>
							<Badge category={posts.category} />
							<DynamicHeading title={posts.title} />
							<PostMeta date={posts.date} readTime={posts.readTime} />

							<div className='flex items-center gap-2 group-hover:text-[#0F4F9E] transition-colors duration-300 text-[#667F93]'>
								<motion.span
									className='text-sm font-medium'
									animate={isHovered ? { x: 2 } : { x: 0 }}
									transition={{ duration: 0.3 }}
								>
									Khám phá thêm
								</motion.span>

								<div className='relative flex items-center'>
									{/* Mũi tên chính */}
									<motion.div
										variants={arrowVariants}
										initial='initial'
										animate={isHovered ? 'animate' : 'initial'}
									>
										<ArrowRight className='w-4 h-4' />
									</motion.div>

									{/* Hiệu ứng mũi tên trailing */}
									<AnimatePresence>
										{isHovered && (
											<motion.div
												className='absolute'
												variants={trailingArrowVariants}
												initial={{ opacity: 0, x: -5 }}
												animate='animate'
												exit='exit'
											>
												<ArrowRight className='w-4 h-4 text-[#0F4F9E]/40' />
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							</div>
						</div>
					</div>

					{/* Viền khi hover */}
					<motion.div
						className='absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none'
						animate={{
							borderColor: isHovered ? 'rgba(15, 79, 158, 0.3)' : 'rgba(15, 79, 158, 0)',
						}}
						transition={{ duration: 0.3 }}
					/>
				</article>
			</Link>
		</motion.div>
	);
}
