'use client';
import BreadcrumbNavigation from '@/app/components/common/breadcrumb';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<div className='relative'>
			<div>
				<Image
					src='/images/hero-decor-left.png'
					width={200}
					height={200}
					alt='hero-decor-left'
					className='absolute left-0 animate-floatLeft top-1/3 size-40 lg:block hidden z-0 transition-all duration-1000 ease-in-out'
				/>
			</div>
			<Image
				src='/images/hero-decor-blur.png'
				width={600}
				height={600}
				alt='hero-decor-blur'
				className='absolute left-0 -translate-x-1/2 top-1/2 z-0'
			/>
			<div>
				<Image
					src='/images/hero-decor-right.png'
					width={200}
					height={200}
					alt='hero-decor-right'
					className='absolute right-0 animate-floatRight top-1/3 size-40 lg:block hidden z-0 transition-all duration-1000 ease-in-out'
				/>
			</div>
			<div className='sec-com'>
				<div className='w-full max-w-7xl mx-auto relative z-10'>
					<div className='flex justify-center flex-col items-center text-center'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<BreadcrumbNavigation
								items={[
									{ text: 'Trang chủ', url: '/' },
									{ text: 'Tài nguyên', url: '/' },
									{ text: 'Blog' },
								]}
							/>
						</motion.div>
						<div>
							<motion.h1
								className='text-4xl sm:text-5xl md:text-6xl leading-normal lg:!leading-[100px] font-normal text-center'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.8, delay: 0.2 }}
							>
								<motion.span
									initial={{ x: -50, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.6, delay: 0.3 }}
								>
									Blog{' '}
								</motion.span>
								<motion.span
									className='bg-text-gradient bg-no-repeat bg-[length:200%_200%] bg-clip-text text-transparent font-extrabold capitalize animate-textGradient'
									initial={{ scale: 0.8, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ duration: 0.8, delay: 0.5 }}
								>
									FOSO
								</motion.span>{' '}
								<motion.span
									initial={{ x: 50, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.6, delay: 0.7 }}
								>
									– <br /> Cập Nhật Tin Tức{' '}
								</motion.span>
								<motion.div
									className='relative inline-flex items-center justify-center mb-2'
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.9 }}
								>
									<motion.div
										className='absolute bottom-3 h-1/3 bg-emerald-200 rounded-3xl'
										initial={{ width: 0, left: 0 }}
										animate={{ width: '100%' }}
										transition={{
											duration: 1.2,
											delay: 1.0,
											ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for ink flow effect
										}}
										style={{
											originX: 0,
											originY: 0.5,
										}}
									/>
									<h1 className='relative font-extrabold tracking-tighter z-10'>Mới Nhất</h1>
								</motion.div>
							</motion.h1>
							<motion.p
								className='text-xs sm:text-sm md:text-lg text-sub font-medium max-w-2xl'
								initial={{ opacity: 1, y: 0 }}
								animate={{ opacity: 1, y: 0 }}
							>
								{Array.from('Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!').map(
									(char, index) => (
										<motion.span
											key={index}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{
												duration: 0.01,
												delay: 1.1 + index * 0.05,
												ease: 'easeIn',
											}}
										>
											{char}
										</motion.span>
									)
								)}
							</motion.p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
