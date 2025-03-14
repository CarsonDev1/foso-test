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
	imageWidth = 500,
	imageHeight = 500,
	buttonText = 'Tham Gia Ngay',
	title = '',
	onClick,
	className = '',
	backgroundColor = 'bg-gradient-to-t from-[#013DA0] via-[#025ACE] to-[#0375F3]',
}: BannerProps) {
	return (
		<div className={`rounded-3xl overflow-hidden ${backgroundColor} shadow-lg ${className}`}>
			<div className='flex flex-col relative items-center justify-between h-full'>
				<div className='relative'>
					<div className='relative w-full'>
						<Image
							src={imageSrc}
							width={imageWidth}
							height={imageHeight}
							alt={imageAlt}
							className='object-cover w-full h-56'
						/>
					</div>
				</div>
				<div className='w-full text-white p-6 flex flex-col items-center gap-2 md:gap-4 lg:gap-8'>
					<div className='h-full md:h-32'>
						{title !== '' && <h2 className='text-lg md:text-xl font-bold leading-tight'>{title}</h2>}
						{imageSecond && <Image src={imageSecond} alt='image-second' width={400} height={200} />}
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
