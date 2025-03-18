/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FeedbackOption {
	emoji: string;
	label: string;
	count: number;
}

export default function ArticleFeedback() {
	const [selectedOption, setSelectedOption] = useState<number | null>(null);
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

	// Bouncing animation
	const bounceVariants: any = {
		hover: {
			y: [0, -10, 0, -6, 0],
			transition: {
				duration: 1.2,
				repeat: Infinity,
				repeatType: 'loop',
				ease: 'easeInOut',
			},
		},
		initial: {
			y: 0,
			transition: {
				duration: 0.3,
			},
		},
		tap: {
			scale: 1.4,
			transition: {
				duration: 0.1,
			},
		},
	};

	// Card animation
	const cardVariants = {
		hover: {
			y: -5,
			boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
			transition: {
				duration: 0.3,
			},
		},
		initial: {
			y: 0,
			boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
			transition: {
				duration: 0.3,
			},
		},
		selected: {
			y: -5,
			boxShadow: '0 10px 15px -3px rgba(21, 170, 122, 0.2), 0 4px 6px -2px rgba(21, 170, 122, 0.1)',
			borderColor: 'rgba(21, 170, 122, 1)',
			backgroundColor: 'rgba(239, 246, 255, 0.6)',
			transition: {
				duration: 0.3,
			},
		},
	};

	return (
		<div className='rounded-2xl bg-white shadow-lg p-6 w-full mx-auto flex flex-col gap-6'>
			<div className='text-center mb-2 text-sub'>
				<h3 className='text-lg md:text-xl font-extrabold '>Bạn thấy bài viết như thế nào?</h3>
				<p className='text-sm md:text-base'>{totalFeedbacks} phản hồi</p>
			</div>

			<div className='flex flex-wrap justify-center gap-2 sm:gap-8'>
				{feedbackOptions.map((option, index) => (
					<motion.div
						key={index}
						className={`flex flex-col gap-1 items-center cursor-pointer border p-2 rounded-lg`}
						variants={cardVariants}
						initial='initial'
						animate={selectedOption === index ? 'selected' : hoveredIndex === index ? 'hover' : 'initial'}
						whileTap={{ scale: 0.98 }}
						onClick={() => handleSelect(index)}
						onHoverStart={() => setHoveredIndex(index)}
						onHoverEnd={() => setHoveredIndex(null)}
					>
						<div className='px-5 py-2 flex items-center justify-center text-3xl'>
							<motion.span
								role='img'
								aria-label={option.label}
								variants={bounceVariants}
								initial='initial'
								animate={hoveredIndex === index ? 'hover' : 'initial'}
								whileTap='tap'
								style={{
									display: 'inline-block',
									transformOrigin: 'bottom center',
									textShadow: hoveredIndex === index ? '0 0 8px rgba(0,0,0,0.1)' : 'none',
								}}
							>
								{option.emoji}
							</motion.span>
						</div>

						{/* Count and label */}
						<div className='text-center'>
							<motion.div
								className='font-medium text-gray-700'
								animate={{
									scale: option.count > 0 && selectedOption === index ? [1, 1.2, 1] : 1,
									color: selectedOption === index ? '#15AA7A' : '#374151',
								}}
								transition={{ duration: 0.5 }}
							>
								{option.count}
							</motion.div>
							<div className='text-xs text-gray-500'>{option.label}</div>
						</div>

						{/* Selection indicator */}
						<AnimatePresence>
							{selectedOption === index && (
								<motion.div
									className='absolute bottom-0 left-0 w-full h-1 bg-primary rounded-b-lg'
									initial={{ scaleX: 0 }}
									animate={{ scaleX: 1 }}
									exit={{ scaleX: 0 }}
									transition={{ duration: 0.3 }}
								/>
							)}
						</AnimatePresence>
					</motion.div>
				))}
			</div>
		</div>
	);
}
