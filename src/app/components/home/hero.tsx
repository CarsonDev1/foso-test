'use client';
import BreadcrumbNavigation from '@/app/components/common/breadcrumb';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
	return (
		<div className='relative'>
			<div>
				<Image
					src='/images/hero-decor-left.png'
					width={200}
					height={200}
					alt='hero-decor-left'
					className='absolute left-0 translate-x-1/4 top-1/3 size-40 lg:block hidden z-0'
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
					className='absolute right-0 -translate-x-1/4 top-1/3 size-40 lg:block hidden z-0'
				/>
			</div>
			<div className='sec-com'>
				<div className='w-full max-w-7xl mx-auto relative z-10'>
					<div className='flex justify-center flex-col items-center text-center'>
						<BreadcrumbNavigation
							items={[
								{ text: 'Trang chủ', url: '/' },
								{ text: 'Tài nguyên', url: '/' },
								{ text: 'Blog' },
							]}
						/>
						<div>
							<h1 className='text-4xl sm:text-5xl md:text-6xl leading-normal lg:!leading-[100px] font-normal text-center'>
								Blog{' '}
								<span className='bg-gradient-to-r from-[#53B086] to-[#53B086]/[0.99] bg-clip-text text-transparent font-extrabold capitalize'>
									FOSO
								</span>{' '}
								– <br /> Cập Nhật Tin Tức{' '}
								<div className='relative inline-flex items-center justify-center mb-2'>
									<div className='absolute bottom-3 w-full h-1/3 bg-emerald-200 rounded-3xl' />
									<h1 className='relative font-extrabold tracking-tighter z-10'>Mới Nhất</h1>
								</div>
							</h1>
							<p className='text-xs sm:text-sm md:text-lg text-sub font-medium max-w-2xl'>
								Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
