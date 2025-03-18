'use client';
import Pagination from '@/app/components/common/pagination';
import SectionHeading from '@/app/components/common/section-heading';
import BlogGrid, { BlogPost } from '@/app/components/home/blog-grid';
import SearchInterface from '@/app/components/home/search-interface';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { ScrollReveal, ScrollRevealGrid } from '@/app/components/common/scroll-reveal';

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
						<ScrollReveal>
							<SectionHeading title='Tất cả bài viết' />
						</ScrollReveal>

						<ScrollReveal delay={0.2} duration={0.7} direction='up'>
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

									<div className='absolute right-0 -bottom-7 z-0 h-full'>
										<div className='relative w-full max-w-md'>
											<div className='relative w-fit'>
												<Image
													src='/images/feature-main.png'
													width={700}
													height={700}
													alt='feature-main'
													className='relative z-10'
												/>
												<div className='absolute top-1/4 w-[90%] h-1/3 z-10 animate-deco2Move'>
													<div className='absolute right-0'>
														<div className='relative'>
															<Image
																src='/images/circle.png'
																width={56}
																height={67}
																alt='circle-01'
																className='filter drop-shadow-lg'
															/>
														</div>
													</div>
													<div className='absolute right-10 top-1/2'>
														<div className='relative'>
															<Image
																src='/images/chat-pur.png'
																width={56}
																height={67}
																alt='chat-01'
																className='filter drop-shadow-lg'
															/>
														</div>
													</div>
													<div className='absolute left-1/4 -top-1/4'>
														<div className='relative'>
															<Image
																src='/images/chat-white.png'
																width={56}
																height={67}
																alt='chat-01'
																className='filter drop-shadow-lg'
															/>
														</div>
													</div>
												</div>
											</div>
											<div className='absolute top-0 right-0 z-0'>
												<Image
													src='/images/cloud.png'
													width={223}
													height={111}
													alt='cloud-01'
													className='animate-cloudMove'
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</ScrollReveal>

						<ScrollRevealGrid
							className='grid grid-cols-1 md:grid-cols-2 gap-6'
							itemDelay={0.1}
							staggerChildren={0.1}
							direction='up'
							threshold={0.05}
						>
							{Array.from({ length: 6 }).map((_, index) => (
								<BlogGrid key={index} posts={blogPost} index={index} />
							))}
						</ScrollRevealGrid>
						<ScrollReveal delay={0.5} direction='up'>
							<Pagination
								currentPage={currentPage}
								totalPages={totalPages}
								onPageChange={setCurrentPage}
							/>
						</ScrollReveal>
					</div>

					<ScrollReveal direction='left' delay={0.3} className='w-full lg:w-1/4 sticky top-28 right-0 h-fit'>
						<SearchInterface />
					</ScrollReveal>
				</div>
			</div>
		</div>
	);
}
