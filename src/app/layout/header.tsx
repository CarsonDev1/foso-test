'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import DropdownContent from '@/app/components/common/dropdown-content';
import LanguageSwitcher from '@/app/components/common/language-button';
import CustomerButton from '@/app/components/common/customer-button';
import Logo from '../../../public/images/logo.png';

const NAV_ITEMS = [
	{ name: 'about', label: 'Về Chúng tôi', href: '#', hasDropdown: false },
	{ name: 'solutions', label: 'Giải pháp', href: '#', hasDropdown: true },
	{ name: 'resources', label: 'Tài nguyên', href: '#', hasDropdown: true },
	{ name: 'contact', label: 'Liên hệ', href: '#', hasDropdown: false },
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [hoveredItem, setHoveredItem] = useState<string | null>(null);

	const toggleDropdown = (name: string) => {
		setActiveDropdown(activeDropdown === name ? null : name);
	};

	return (
		<header className='w-full max-w-7xl mx-auto pt-3 md:pt-6 sticky top-0 left-0 z-50'>
			<div className='w-full mx-auto px-4 md:px-9 py-2 md:py-3 flex items-center justify-between lg:justify-around rounded-[40px] bg-white/65 shadow-lg backdrop-blur-md'>
				<Link href='/' className='flex-shrink-0'>
					<div className='relative h-10 w-32'>
						<Image src={Logo} alt='Logo' fill className='object-contain' />
					</div>
				</Link>

				<nav className='hidden lg:flex items-center space-x-8'>
					{NAV_ITEMS.map((item) => (
						<div
							key={item.name}
							className='relative group'
							onMouseEnter={() => setHoveredItem(item.name)}
							onMouseLeave={() => setHoveredItem(null)}
						>
							<div className='relative'>
								{item.hasDropdown ? (
									<button
										className={`flex items-center text-gray-700 hover:text-emerald-500 transition-all duration-300`}
									>
										{item.label}
										<ChevronDown className='ml-1 h-4 w-4' />
									</button>
								) : (
									<Link
										href={item.href}
										className='text-gray-700 hover:text-emerald-500 transition-all duration-300'
									>
										{item.label}
									</Link>
								)}
								{hoveredItem === item.name && (
									<div className='absolute -bottom-2 left-0 w-full h-0.5 bg-emerald-500' />
								)}
							</div>
							{item.hasDropdown && (
								<div className='absolute top-full left-0 hidden group-hover:block pt-2 z-10'>
									<DropdownContent />
								</div>
							)}
						</div>
					))}
				</nav>

				<div className='hidden lg:flex items-center space-x-4'>
					<LanguageSwitcher />
					<CustomerButton />
				</div>

				<button className='lg:hidden' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
					{mobileMenuOpen ? (
						<X className='h-6 w-6 text-gray-700' />
					) : (
						<Menu className='h-6 w-6 text-gray-700' />
					)}
				</button>
			</div>

			<div
				className={cn(
					'lg:hidden fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 h-full',
					mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
				)}
			>
				<div className='flex justify-between items-center p-4 border-b'>
					<div className='relative h-8 w-24'>
						<Image src={Logo} alt='Logo' fill className='object-contain' />
					</div>
					<button onClick={() => setMobileMenuOpen(false)}>
						<X className='h-6 w-6 text-gray-700' />
					</button>
				</div>

				<div className='px-4 py-4 space-y-2 h-[calc(100%-64px)] overflow-y-auto'>
					{NAV_ITEMS.map((item) => (
						<div key={item.name}>
							{item.hasDropdown ? (
								<>
									<button
										className='flex items-center justify-between w-full py-3 text-gray-700 border-b'
										onClick={() => toggleDropdown(item.name)}
									>
										<span>{item.label}</span>
										<ChevronDown
											className={cn(
												'h-4 w-4 transition-transform duration-200',
												activeDropdown === item.name ? 'rotate-180' : ''
											)}
										/>
									</button>
									{activeDropdown === item.name && (
										<div className='py-2'>
											<DropdownContent />
										</div>
									)}
								</>
							) : (
								<Link
									href={item.href}
									className='block py-3 text-gray-700 border-b'
									onClick={() => setMobileMenuOpen(false)}
								>
									{item.label}
								</Link>
							)}
						</div>
					))}

					<div className='pt-4 flex flex-col space-y-4'>
						<LanguageSwitcher />
						<CustomerButton />
					</div>
				</div>
			</div>

			{mobileMenuOpen && (
				<div className='lg:hidden fixed inset-0 bg-black/20 z-40' onClick={() => setMobileMenuOpen(false)} />
			)}
		</header>
	);
}
