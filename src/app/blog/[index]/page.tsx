'use client';
import React from 'react';
import Badge from '@/app/components/common/badge';
import Breadcrumb from '@/app/components/common/breadcrumb';
import ContentSection from '@/app/components/common/content-section';
import FiveSTermsList from '@/app/components/common/five-term';
import QuoteBlock from '@/app/components/common/quote-block';
import SectionHeading from '@/app/components/common/section-heading';
import CaptionedImage from '@/app/components/common/caption-image';
import ArticleFeedback from '@/app/components/common/article-feedback';
import { ScrollReveal, ScrollRevealGrid } from '@/app/components/common/scroll-reveal';
import { BLOG_CONTENT } from '@/app/data/blog-content';

import Content01 from '/public/images/content-img-01.png';
import Content02 from '/public/images/content-img-02.png';
import Content03 from '/public/images/content-img-03.png';
import Content04 from '/public/images/content-img-04.png';
import Content05 from '/public/images/content-img-05.png';
import AuthorInfo from '@/app/components/common/auth-info';
import BlogGrid from '@/app/components/home/blog-grid';
import { BlogPost } from '@/types/content';
import ArticleContent from '@/app/components/common/article-content';
import DynamicBanner from '@/app/components/common/dynamic-banner';
import SocialShare from '@/app/components/common/social-share';

const BlogDetail: React.FC = () => {
	const blogPost: BlogPost = {
		title: 'Tại sao BOM quan trọng trong quản lý sản xuất?',
		category: 'Quản Lý Sản Xuất',
		date: '27/11/2022',
		readTime: '10 phút đọc',
	};

	return (
		<div className='relative'>
			<ScrollReveal threshold={0.1} direction='up' delay={0} duration={0.5}>
				<SocialShare />
			</ScrollReveal>

			<ScrollReveal threshold={0.1} direction='up' delay={0.1} duration={0.5}>
				<Breadcrumb
					items={[
						{ text: 'Trang chủ', url: '/' },
						{ text: 'Tài nguyên', url: '/' },
						{ text: 'Blog', url: '/' },
						{ text: 'Quản lý sản xuất', url: '/' },
					]}
				/>
			</ScrollReveal>

			<div className='sec-com'>
				<div className='container-lg'>
					<div className='flex gap-4 lg:gap-8 flex-col lg:flex-row'>
						<div className='space-y-6 relative w-full lg:w-2/3'>
							{/* Sử dụng ScrollReveal cho header content với delay thấp */}
							<ScrollReveal threshold={0.1} direction='up' delay={0.2} duration={0.7}>
								<div className='space-y-4'>
									<Badge category='Quản lý sản xuất' />
									<SectionHeading title='Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết' />
									<AuthorInfo />
								</div>
							</ScrollReveal>

							{/* Hình ảnh hero với ScrollReveal */}
							<ScrollReveal threshold={0.1} direction='up' delay={0.3} duration={0.8}>
								<CaptionedImage
									src={Content01}
									width={1200}
									height={800}
									caption='Quy trình 5s là gì?'
								/>
							</ScrollReveal>

							<ScrollReveal threshold={0.1} direction='up' delay={0.2}>
								<QuoteBlock />
							</ScrollReveal>

							{renderContentSections()}

							<ScrollReveal threshold={0.1} direction='up'>
								<ArticleFeedback />
							</ScrollReveal>

							<div className='space-y-4 md:space-y-6'>
								<ScrollReveal threshold={0.1} direction='up'>
									<SectionHeading title='Bài viết liên quan' />
								</ScrollReveal>

								<ScrollRevealGrid
									className='grid grid-cols-2 md:grid-cols-3 gap-6'
									itemDelay={0.1}
									staggerChildren={0.15}
									direction='up'
									threshold={0.05}
								>
									{Array.from({ length: 3 }).map((_, index) => (
										<BlogGrid key={index} posts={blogPost} index={index} />
									))}
								</ScrollRevealGrid>
							</div>
						</div>

						<div className='w-full lg:w-1/4 flex flex-col gap-6 sticky top-28 h-fit'>
							<ScrollReveal direction='left' threshold={0.1} delay={0.3}>
								<ArticleContent />
							</ScrollReveal>

							<ScrollReveal direction='left' threshold={0.1} delay={0.5}>
								<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2 md:gap-4 lg:gap-8'>
									<DynamicBanner
										imageSrc='/images/devices.png'
										imageAlt='feature-banner'
										buttonText='Trải nghiệm ngay'
										imageSecond='/images/free-img.png'
									/>
									<DynamicBanner
										imageSrc='/images/feature-banner.png'
										imageAlt='feature-banner'
										title='Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát triển!'
									/>
								</div>
							</ScrollReveal>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// Sử dụng ScrollReveal cho mỗi phần nội dung
const renderContentSections = () => (
	<>
		<ScrollReveal threshold={0.1} direction='up' delay={0.1}>
			<ContentSection {...BLOG_CONTENT.section1} />
		</ScrollReveal>

		<ScrollReveal threshold={0.15} direction='up' delay={0.1}>
			<FiveSTermsList />
		</ScrollReveal>

		<ScrollReveal threshold={0.1} direction='up' delay={0.1}>
			<ContentSection {...BLOG_CONTENT.section2} />
		</ScrollReveal>

		<ScrollReveal threshold={0.2} direction='up' delay={0.2}>
			<CaptionedImage
				src={Content02}
				width={1200}
				height={800}
				caption='Tại sao doanh nghiệp cần quy trình 5S?'
			/>
		</ScrollReveal>

		<ScrollReveal threshold={0.1} direction='up' delay={0.1}>
			<ContentSection {...BLOG_CONTENT.section3} />
		</ScrollReveal>

		<ScrollReveal threshold={0.2} direction='up' delay={0.2}>
			<CaptionedImage src={Content03} width={1200} height={800} caption='Quy trình 5s gồm các bước' />
		</ScrollReveal>

		<ScrollReveal threshold={0.1} direction='up' delay={0.1}>
			<ContentSection {...BLOG_CONTENT.section4} />
		</ScrollReveal>

		<ScrollReveal threshold={0.2} direction='up' delay={0.2}>
			<CaptionedImage src={Content04} width={1200} height={800} caption='Các bước thực hiện quy trình 5s' />
		</ScrollReveal>

		<ScrollReveal threshold={0.1} direction='up' delay={0.1}>
			<ContentSection {...BLOG_CONTENT.section5} />
		</ScrollReveal>

		<ScrollReveal threshold={0.1} direction='up' delay={0.1}>
			<ContentSection {...BLOG_CONTENT.section6} />
		</ScrollReveal>

		<ScrollReveal threshold={0.1} direction='up' delay={0.1}>
			<ContentSection {...BLOG_CONTENT.section7} />
		</ScrollReveal>

		<ScrollReveal threshold={0.2} direction='up' delay={0.2}>
			<CaptionedImage
				src={Content05}
				width={1200}
				height={800}
				caption='Các yếu tố tạo nên thành công cho quy trình 5S'
			/>
		</ScrollReveal>

		<ScrollReveal threshold={0.1} direction='up' delay={0.1}>
			<ContentSection {...BLOG_CONTENT.section8} />
		</ScrollReveal>
	</>
);

export default BlogDetail;
