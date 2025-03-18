import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { ReactNode } from 'react';

interface BannerProps {
	imageSrc: string;
	imageAlt: string;
	imageWidth?: number;
	imageHeight?: number;
	title?: string | ReactNode;
	buttonText?: string;
	onClick?: () => void;
	className?: string;
	backgroundColor?: string;
	imageSecond?: string;
}

export default function DynamicBanner({
	imageSrc,
	imageAlt,
	imageSecond,
	buttonText = 'Tham Gia Ngay',
	title = '',
	onClick,
	className = '',
	backgroundColor = 'bg-gradient-to-t from-[#013DA0] via-[#025ACE] to-[#0375F3]',
}: BannerProps) {
	return (
		<div className={`rounded-3xl overflow-hidden ${backgroundColor} shadow-lg ${className}`}>
			<div className='flex flex-col relative items-center justify-between h-full'>
				{/* Sửa phần hình ảnh để tương thích tốt hơn với iOS */}
				<div className='relative w-full'>
					{/* Sử dụng aspect-ratio để duy trì tỷ lệ khung hình */}
					<div className='relative w-full aspect-[16/9] overflow-hidden'>
						<Image
							src={imageSrc}
							alt={imageAlt}
							fill
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							priority
							className='object-cover object-center'
							style={{
								width: '100%',
								height: '100%',
								maxHeight: '224px', // Tương đương với h-56 khi ở desktop
							}}
						/>
					</div>
				</div>
				<div className='w-full text-white p-6 flex flex-col items-center gap-2 md:gap-4 lg:gap-8'>
					<div className='min-h-[5rem] md:min-h-[8rem] w-full flex items-center justify-center'>
						{title !== '' && (
							<h2 className='text-lg md:text-xl font-bold leading-tight text-center'>{title}</h2>
						)}
						{imageSecond && (
							<div className='relative w-full h-[100px] md:h-[150px]'>
								<Image
									src={imageSecond}
									alt='image-second'
									fill
									sizes='(max-width: 768px) 100vw, 400px'
									className='object-contain'
								/>
							</div>
						)}
					</div>

					<button
						className='flex w-full justify-between items-center gap-2 bg-transparent hover:bg-white/10 text-white border-2 border-white rounded-full px-6 py-3 transition-all duration-300 group hover:scale-105 active:scale-95'
						onClick={onClick}
					>
						<span className='font-medium'>{buttonText}</span>
						<div className='group-hover:translate-x-1 transition-transform duration-300'>
							<ArrowRight className='w-4 h-4' />
						</div>
					</button>
				</div>
			</div>
		</div>
	);
}
