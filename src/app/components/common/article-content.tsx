'use client';
import DynamicHeading from '@/app/components/common/dynamic-heading';
import { ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface TableItem {
	id: string;
	title: string;
	children?: TableItem[];
}

export default function ArticleContent() {
	const [isExpanded, setIsExpanded] = useState(true);

	const tableItems: TableItem[] = [
		{ id: '1', title: 'Quy trình 5S là gì?' },
		{ id: '2', title: 'Lợi ích quy trình 5S đem lại' },
		{
			id: '3',
			title: 'Tại sao doanh nghiệp nên áp dụng quy trình 5S?',
			children: [
				{ id: '3.1', title: 'Cải thiện rõ nét môi trường làm việc' },
				{ id: '3.2', title: 'Tiết kiệm thời gian đáng kể' },
				{ id: '3.3', title: 'Tăng năng suất làm việc' },
				{ id: '3.4', title: 'Tiết kiệm chi phí' },
				{ id: '3.5', title: 'Tăng chất lượng sản phẩm' },
			],
		},
		{
			id: '4',
			title: 'Quy trình 5S gồm các bước:',
			children: [
				{ id: '4.1', title: 'Seiri (Ngăn nắp)' },
				{ id: '4.2', title: 'Seiton (Sắp xếp)' },
				{ id: '4.3', title: 'Seiso (Vệ sinh)' },
				{ id: '4.4', title: 'Seiketsu (Tiêu chuẩn hóa)' },
				{ id: '4.5', title: 'Shitsuke (Kỷ luật)' },
			],
		},
		{
			id: '5',
			title: 'Quy trình được thực hiện như sau:',
			children: [
				{ id: '5.1', title: 'Giai đoạn chuẩn bị' },
				{ id: '5.2', title: 'Triển khai rộng rãi' },
				{ id: '5.3', title: 'Thực hiện vệ sinh toàn bộ doanh nghiệp' },
				{ id: '5.4', title: 'Sàng lọc, sắp xếp và đánh giá' },
				{ id: '5.5', title: 'Đánh giá' },
			],
		},
		{ id: '6', title: 'Quy trình 5S có giống với Kaizen?' },
		{ id: '7', title: 'Đối tượng nào nên áp dụng 5S?' },
	];

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className='relative'>
			<div className='flex justify-between items-center cursor-pointer px-4 py-2' onClick={toggleExpand}>
				<DynamicHeading title='Nội Dung Bài Viết' />
				<ChevronUp className={`w-5 h-5 text-title transition-transform ${isExpanded ? '' : 'rotate-180'}`} />
			</div>

			{isExpanded && (
				<div className='pt-2 px-4'>
					<ul className='space-y-2'>
						{tableItems.map((item) => (
							<li key={item.id}>
								<Link
									href={`#section-${item.id}`}
									className='text-sub hover:text-primary text-base md:text-lg block'
								>
									{item.id}. {item.title}
								</Link>

								{item.children && (
									<ul className='ml-6 mt-2 space-y-2'>
										{item.children.map((child) => (
											<li key={child.id}>
												<Link
													href={`#section-${child.id}`}
													className='text-sub hover:text-primary text-base md:text-lg block'
												>
													{child.id} {child.title}
												</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
