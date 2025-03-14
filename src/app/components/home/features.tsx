'use client';
import Pagination from '@/app/components/common/pagination';
import SectionHeading from '@/app/components/common/section-heading';
import BlogGrid, { BlogPost } from '@/app/components/home/blog-grid';
import SearchInterface from '@/app/components/home/search-interface';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Features() {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = 10;

	const blogPost: BlogPost = {
		title: 'Tại sao BOM quan trọng trong quản lý sản xuất?',
		category: 'Quản Lý Sản Xuất',
		date: '27/11/2022',
		readTime: '10 phút đọc',
	};

	return (
		<div className='sec-com'>
			<div className='container-lg'>
				<div className='flex gap-4 lg:gap-8 flex-col lg:flex-row'>
					<div className='rounded-xl relative w-full lg:w-2/3 flex flex-col gap-4 md:gap-8 lg:gap-12'>
						<SectionHeading title='Tất cả bài viết' />
						<div className='rounded-3xl overflow-hidden bg-gradient-to-r from-[#013DA0] via-[#025ACE] to-[#0375F3] shadow-lg'>
							<div className='flex flex-col md:flex-row items-center p-8 md:p-12 relative'>
								<div className='w-full md:w-1/2 text-white mb-8 md:mb-0 relative z-20'>
									<h2 className='text-3xl md:text-4xl font-bold leading-tight mb-6'>
										Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
									</h2>

									<button className='flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border-2 border-white rounded-full px-6 py-3 transition-all duration-300 group'>
										<span className='font-medium'>Tham Gia Ngay</span>
										<div>
											<ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
										</div>
									</button>
								</div>

								<div className='absolute inset-0 bg-black/40 bg-opacity-35 z-10 md:hidden block'></div>

								<div className='absolute right-0 top-0 z-0'>
									<div className='relative w-full max-w-md'>
										<Image
											src='/images/feature-banner.png'
											width={500}
											height={500}
											alt='feature-banner'
										/>
									</div>
								</div>
							</div>
						</div>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							{Array.from({ length: 6 }).map((_, index) => (
								<BlogGrid key={index} posts={blogPost} index={index} />
							))}
						</div>
					</div>
					<div className='w-full lg:w-1/4 sticky top-28 right-0 h-fit'>
						<SearchInterface />
					</div>
				</div>
				<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
			</div>
		</div>
	);
}
