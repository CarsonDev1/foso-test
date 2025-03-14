'use client';
import { Search } from 'lucide-react';
import { useState } from 'react';
import DynamicBanner from '@/app/components/common/dynamic-banner';
import DynamicHeading from '@/app/components/common/dynamic-heading';

export default function SearchInterface() {
	const categories = [
		{ name: 'Tất cả', count: 108 },
		{ name: 'Thiết Kế Website', count: 36 },
		{ name: 'Thiết Kế App Mobile', count: 13 },
		{ name: 'Quản Lý Sản Xuất', count: 25 },
		{ name: 'Quản Lý Bán Hàng', count: 22 },
		{ name: 'Báo Chí Nói Về FOSO', count: 7 },
		{ name: 'Tin Tức FOSO', count: 5 },
	];

	const [activeCategory, setActiveCategory] = useState<number | null>(null);
	const [searchValue, setSearchValue] = useState('');

	const handleCategoryHover = (index: number) => {
		setActiveCategory(index);
	};

	const handleCategoryLeave = () => {
		setActiveCategory(null);
	};

	return (
		<div className='bg-white rounded-xl shadow-sm flex flex-col gap-2 md:gap-4 lg:gap-8'>
			<h2 className='text-3xl md:text-4xl font-bold leading-tight'>Tìm Kiếm</h2>

			<div className='relative'>
				<input
					type='text'
					placeholder='Tìm kiếm bài viết'
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					className='w-full py-4 px-5 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300'
				/>
				<button className='absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-lg transition-colors duration-300'>
					<Search className='w-5 h-5' />
				</button>
			</div>

			<div>
				<ul className='space-y-4'>
					<DynamicHeading title='Danh Mục' />
					{categories.map((category, index) => (
						<li
							key={index}
							className='flex justify-between items-center p-2 rounded-lg cursor-pointer transition-all duration-300 hover:translate-x-1'
							style={{
								backgroundColor: activeCategory === index ? '#f0fcf7' : 'transparent',
								borderLeft: activeCategory === index ? '4px solid #10b981' : '4px solid transparent',
							}}
							onMouseEnter={() => handleCategoryHover(index)}
							onMouseLeave={handleCategoryLeave}
						>
							<span
								className={`text-lg transition-colors duration-300 ${
									activeCategory === index ? 'text-emerald-600 font-medium' : ''
								}`}
							>
								{category.name}
							</span>
							<span
								className={`transition-colors duration-300 hover:scale-110 ${
									activeCategory === index ? 'text-emerald-600 font-medium' : 'text-gray-500'
								}`}
							>
								{category.count}
							</span>
						</li>
					))}
				</ul>
			</div>

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
		</div>
	);
}
