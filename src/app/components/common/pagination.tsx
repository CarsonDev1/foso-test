'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage = 1, totalPages = 10, onPageChange = () => {} }: PaginationProps) {
	const getPageNumbers = () => {
		const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
		const maxVisiblePages = isMobile ? 3 : 5;

		let startPage: number;
		let endPage: number;

		if (totalPages <= maxVisiblePages) {
			startPage = 1;
			endPage = totalPages;
		} else {
			const halfVisiblePages = Math.floor(maxVisiblePages / 2);

			if (currentPage <= halfVisiblePages + 1) {
				startPage = 1;
				endPage = maxVisiblePages;
			} else if (currentPage >= totalPages - halfVisiblePages) {
				startPage = totalPages - maxVisiblePages + 1;
				endPage = totalPages;
			} else {
				startPage = currentPage - halfVisiblePages;
				endPage = currentPage + halfVisiblePages;
			}
		}

		return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
	};

	const pageNumbers = getPageNumbers();

	return (
		<div className='w-full sec-com'>
			<div className='flex justify-between items-center'>
				<button
					onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className='flex items-center text-gray-500 hover:text-gray-700 disabled:opacity-50'
				>
					<ChevronLeft className='w-4 h-4 mr-1' />
					<span className='hidden sm:inline'>Trang trước</span>
				</button>

				<div className='flex items-center space-x-1 sm:space-x-2'>
					{pageNumbers[0] > 1 && (
						<>
							<button
								onClick={() => onPageChange(1)}
								className='w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-md text-gray-600 hover:bg-gray-100'
							>
								1
							</button>
							{pageNumbers[0] > 2 && <span className='text-gray-500'>...</span>}
						</>
					)}

					{pageNumbers.map((page) => (
						<button
							key={page}
							onClick={() => onPageChange(page)}
							className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-md text-sm sm:text-base ${
								currentPage === page ? 'bg-green-100 text-green-800' : 'text-gray-600 hover:bg-gray-100'
							}`}
						>
							{page}
						</button>
					))}

					{pageNumbers[pageNumbers.length - 1] < totalPages && (
						<>
							{pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
								<span className='text-gray-500'>...</span>
							)}
							<button
								onClick={() => onPageChange(totalPages)}
								className='w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-md text-gray-600 hover:bg-gray-100'
							>
								{totalPages}
							</button>
						</>
					)}
				</div>

				<button
					onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
					className='flex items-center text-gray-500 hover:text-gray-700 disabled:opacity-50'
				>
					<span className='hidden sm:inline'>Trang kế tiếp</span>
					<ChevronRight className='w-4 h-4 ml-1' />
				</button>
			</div>
		</div>
	);
}
