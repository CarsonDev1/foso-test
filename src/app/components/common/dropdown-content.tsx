import Image from 'next/image';
import Link from 'next/link';

interface DropdownItem {
	icon: string;
	title: string;
	subtitle: string;
}

const dropdownItems: DropdownItem[] = [
	{
		icon: '/images/dropdown-item.png',
		title: 'Sản xuất',
		subtitle: 'FMRP - Trợ lý sản xuất',
	},
	{
		icon: '/images/dropdown-item-02.png',
		title: 'Bán hàng',
		subtitle: 'FPOS - Trợ lý bán hàng',
	},
];

export default function DropdownContent() {
	return (
		<div className='p-4 w-full lg:w-[300px] bg-white rounded-lg shadow-lg relative z-10'>
			{dropdownItems.map((item, index) => (
				<Link
					href='#'
					key={index}
					className='flex items-start gap-3 p-4 hover:shadow-2xl transition-all duration-300 rounded-md'
				>
					<div className='rounded-lg p-1'>
						<div className='size-10 flex items-center justify-center relative'>
							<Image src={item.icon} alt={item.title} width={40} height={40} className='size-10' />
						</div>
					</div>
					<div className='flex flex-col'>
						<span className='font-medium text-gray-900'>{item.title}</span>
						<span className='text-sm text-gray-500'>{item.subtitle}</span>
					</div>
				</Link>
			))}
		</div>
	);
}
