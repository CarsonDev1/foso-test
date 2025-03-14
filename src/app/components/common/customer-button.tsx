import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const CustomerButton = () => (
	<div className='relative group w-fit'>
		<Link href='#'>
			<div className='relative flex items-center gap-1 bg-primary text-black font-semibold py-2 px-4 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out w-fit'>
				<div className='absolute inset-0 bg-[#2AD18F] rounded-full -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out'></div>

				<span className='text-sm relative z-10 transform group-hover:-translate-x-1 transition-transform duration-300 ease-in-out'>
					Trở Thành Khách Hàng
				</span>

				<div className='flex items-center justify-center bg-black text-white rounded-full p-1 relative z-10 transform group-hover:translate-x-1 group-hover:rotate-45 transition-all duration-300 ease-in-out'>
					<ArrowUpRight size={20} />
				</div>

				<div className='absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-colors duration-300 ease-in-out'></div>
			</div>
		</Link>

		<div className='absolute -inset-1 rounded-full bg-white/0 group-hover:bg-white/10 blur-md transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100'></div>
	</div>
);

export default CustomerButton;
