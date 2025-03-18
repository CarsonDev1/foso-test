'use client';

import { useState, useRef, useEffect } from 'react';
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
	const [activeItem, setActiveItem] = useState<string>('about');
	const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

	const handleItemHover = (name: string) => {
		// Clear any existing timers
		if (dropdownTimerRef.current) {
			clearTimeout(dropdownTimerRef.current);
			dropdownTimerRef.current = null;
		}
		setHoveredItem(name);
	};

	const handleItemLeave = () => {
		// Delay the dropdown hiding for a smoother experience
		dropdownTimerRef.current = setTimeout(() => {
			setHoveredItem(null);
		}, 100);
	};

	const toggleDropdown = (name: string) => {
		setActiveDropdown(activeDropdown === name ? null : name);
	};

	const enableScrolling = () => {
		document.body.style.overflow = '';
		document.body.style.paddingRight = '';
	};

	const disableScrolling = () => {
		document.body.style.overflow = 'hidden';
		document.body.style.paddingRight = 'var(--scrollbar-width, 0px)';
	};

	const toggleMobileMenu = () => {
		if (mobileMenuOpen) {
			enableScrolling();
		} else {
			disableScrolling();
		}
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const closeMobileMenu = () => {
		enableScrolling();
		setMobileMenuOpen(false);
	};

	// Cleanup timer on unmount
	useEffect(() => {
		return () => {
			if (dropdownTimerRef.current) {
				clearTimeout(dropdownTimerRef.current);
			}
		};
	}, []);

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
							onMouseEnter={() => handleItemHover(item.name)}
							onMouseLeave={handleItemLeave}
						>
							<div className='relative'>
								{item.hasDropdown ? (
									<button
										className={`flex items-center transition-all duration-300 ${
											activeItem === item.name
												? 'text-emerald-500 font-medium'
												: 'text-gray-700 hover:text-emerald-500'
										}`}
									>
										{item.label}
										<ChevronDown
											className={`ml-1 h-4 w-4 transition-transform duration-300 ${
												hoveredItem === item.name ? 'rotate-180 translate-y-[2px]' : ''
											}`}
										/>
									</button>
								) : (
									<Link
										href={item.href}
										className={`transition-all duration-300 ${
											activeItem === item.name
												? 'text-emerald-500 font-medium'
												: 'text-gray-700 hover:text-emerald-500'
										}`}
										onClick={() => setActiveItem(item.name)}
									>
										{item.label}
									</Link>
								)}

								{/* Animated underline */}
								<div
									className={`absolute -bottom-2 left-0 h-0.5 bg-emerald-500 transition-all duration-300 ease-in-out ${
										hoveredItem === item.name || activeItem === item.name ? 'w-full' : 'w-0'
									}`}
								/>
							</div>

							{/* Dropdown with animation */}
							{item.hasDropdown && (
								<div
									className={`
										absolute top-full left-0 pt-2 z-10 
										transition-all duration-300 ease-in-out
										transform origin-top
										${
											hoveredItem === item.name
												? 'opacity-100 translate-y-0 scale-100'
												: 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
										}
									`}
								>
									<div className='bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100'>
										<DropdownContent />
									</div>
								</div>
							)}
						</div>
					))}
				</nav>

				<div className='hidden lg:flex items-center space-x-4'>
					<LanguageSwitcher />
					<CustomerButton />
				</div>

				<button className='lg:hidden' onClick={toggleMobileMenu}>
					{mobileMenuOpen ? (
						<X className='h-6 w-6 text-gray-700' />
					) : (
						<Menu className='h-6 w-6 text-gray-700' />
					)}
				</button>
			</div>

			{/* Mobile Menu with Transition */}
			<div
				className={cn(
					'lg:hidden fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-white shadow-lg z-50 h-full overflow-y-auto transform transition-transform duration-300 ease-in-out',
					mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
				)}
			>
				<div className='flex justify-between items-center p-4 border-b'>
					<div className='relative h-8 w-24'>
						<Image src={Logo} alt='Logo' fill className='object-contain' />
					</div>
					<button onClick={closeMobileMenu}>
						<X className='h-6 w-6 text-gray-700' />
					</button>
				</div>

				<div className='px-4 py-4 space-y-2 h-[calc(100%-64px)] overflow-y-auto'>
					{NAV_ITEMS.map((item) => (
						<div key={item.name}>
							{item.hasDropdown ? (
								<>
									<button
										className={`flex items-center justify-between w-full py-3 border-b ${
											activeItem === item.name ? 'text-emerald-500 font-medium' : 'text-gray-700'
										}`}
										onClick={() => toggleDropdown(item.name)}
									>
										<span>{item.label}</span>
										<ChevronDown
											className={`h-4 w-4 transition-transform duration-300 ${
												activeDropdown === item.name ? 'rotate-180' : ''
											}`}
										/>
									</button>

									{/* Mobile dropdown with animation */}
									<div
										className={`
											overflow-hidden transition-all duration-300 ease-in-out
											${activeDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
										`}
									>
										<div className='py-2 pl-4'>
											<DropdownContent />
										</div>
									</div>
								</>
							) : (
								<Link
									href={item.href}
									className={`block py-3 border-b ${
										activeItem === item.name ? 'text-emerald-500 font-medium' : 'text-gray-700'
									}`}
									onClick={() => {
										setActiveItem(item.name);
										closeMobileMenu();
									}}
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

			{/* Backdrop with fade animation */}
			{mobileMenuOpen && (
				<div
					className='lg:hidden fixed inset-0 bg-black/20 z-40 transition-opacity duration-300 ease-in-out'
					onClick={closeMobileMenu}
				/>
			)}
		</header>
	);
}
