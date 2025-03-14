import { Racing_Sans_One } from 'next/font/google';

const racingSansOne = Racing_Sans_One({
	weight: '400',
	subsets: ['latin'],
});

export default function QuoteBlock() {
	return (
		<div className='relative mx-auto p-3 md:p-6'>
			<div
				className={`${racingSansOne.className} absolute top-0 left-0 text-center text-primary text-5xl md:text-6xl lg:text-8xl font-normal leading-6`}
				style={{
					textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
				}}
			>
				“
			</div>
			<p className='text-sub text-base leading-relaxed w-[90%] mx-auto'>
				Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới
				đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo nên thành công của
				quy trình bạn nhé.
			</p>
		</div>
	);
}
