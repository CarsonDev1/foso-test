'use client';
import React, { useState } from 'react';

interface FeedbackOption {
	emoji: string;
	label: string;
	count: number;
}

export default function ArticleFeedback() {
	const [selectedOption, setSelectedOption] = useState<number | null>(null);
	const [feedbackOptions, setFeedbackOptions] = useState<FeedbackOption[]>([
		{ emoji: '👍', label: 'Hữu ích', count: 1 },
		{ emoji: '💚', label: 'Yêu thích', count: 2 },
		{ emoji: '🤩', label: 'Thú vị', count: 0 },
		{ emoji: '😮', label: 'Bất ngờ', count: 1 },
		{ emoji: '😚', label: 'Nham nhở', count: 0 },
		{ emoji: '😡', label: 'Tức giận', count: 0 },
	]);

	const handleSelect = (index: number) => {
		const newFeedbackOptions = [...feedbackOptions];

		if (index === selectedOption) {
			newFeedbackOptions[index].count = Math.max(0, newFeedbackOptions[index].count - 1);
			setSelectedOption(null);
		} else {
			if (selectedOption !== null) {
				newFeedbackOptions[selectedOption].count = Math.max(0, newFeedbackOptions[selectedOption].count - 1);
			}

			newFeedbackOptions[index].count += 1;
			setSelectedOption(index);
		}

		setFeedbackOptions(newFeedbackOptions);
	};

	const totalFeedbacks = feedbackOptions.reduce((sum, option) => sum + option.count, 0);

	return (
		<div className='rounded-2xl bg-white shadow-lg p-6 w-full mx-auto flex flex-col gap-6'>
			<div className='text-center mb-2 text-sub'>
				<h3 className='text-lg md:text-xl font-extrabold '>Bạn thấy bài viết như thế nào?</h3>
				<p className='text-sm md:text-base'>{totalFeedbacks} phản hồi</p>
			</div>

			<div className='flex flex-wrap justify-center gap-2 sm:gap-8'>
				{feedbackOptions.map((option, index) => (
					<div
						key={index}
						className={`flex flex-col gap-1 items-center cursor-pointer border p-2 rounded-lg transition-all duration-100 ${
							selectedOption === index ? 'border-primary bg-blue-50' : 'border-gray-200'
						}`}
						onClick={() => handleSelect(index)}
					>
						<div className='px-5 flex items-center justify-center text-2xl'>
							<span role='img' aria-label={option.label}>
								{option.emoji}
							</span>
						</div>
						<div className='text-center'>
							<div className='font-medium text-gray-700'>{option.count}</div>
							<div className='text-xs text-gray-500'>{option.label}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
