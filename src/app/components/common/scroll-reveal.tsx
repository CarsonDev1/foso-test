/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

// Component để sử dụng cho bất kỳ phần tử nào cần animation khi scroll
export const ScrollReveal = ({
	children,
	threshold = 0.1,
	delay = 0,
	duration = 0.5,
	direction = 'up',
	className = '',
	once = true,
}: any) => {
	const controls = useAnimation();
	const ref = useRef(null);
	const isInView = useInView(ref, {
		amount: threshold,
		once: once,
	});

	// Cấu hình cho các kiểu animation khác nhau
	const getAnimationVariants = () => {
		const distance = 50;
		switch (direction) {
			case 'up':
				return {
					hidden: { y: distance, opacity: 0 },
					visible: { y: 0, opacity: 1 },
				};
			case 'down':
				return {
					hidden: { y: -distance, opacity: 0 },
					visible: { y: 0, opacity: 1 },
				};
			case 'left':
				return {
					hidden: { x: -distance, opacity: 0 },
					visible: { x: 0, opacity: 1 },
				};
			case 'right':
				return {
					hidden: { x: distance, opacity: 0 },
					visible: { x: 0, opacity: 1 },
				};
			case 'scale':
				return {
					hidden: { scale: 0.8, opacity: 0 },
					visible: { scale: 1, opacity: 1 },
				};
			case 'fade':
			default:
				return {
					hidden: { opacity: 0 },
					visible: { opacity: 1 },
				};
		}
	};

	useEffect(() => {
		if (isInView) {
			controls.start('visible');
		} else if (!once) {
			controls.start('hidden');
		}
	}, [isInView, controls, once]);

	return (
		<motion.div
			ref={ref}
			initial='hidden'
			animate={controls}
			variants={getAnimationVariants()}
			transition={{ duration, delay, ease: 'easeOut' }}
			className={className}
		>
			{children}
		</motion.div>
	);
};

// Áp dụng cho một grid với stagger effect
export const ScrollRevealGrid = ({
	children,
	className = '',
	itemDelay = 0.1,
	staggerChildren = 0.1,
	duration = 0.5,
	direction = 'up',
	threshold = 0.1,
}: any) => {
	const controls = useAnimation();
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: threshold });

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: staggerChildren,
				delayChildren: itemDelay,
			},
		},
	};

	const getChildVariants = () => {
		const distance = 50;
		switch (direction) {
			case 'up':
				return {
					hidden: { y: distance, opacity: 0 },
					visible: {
						y: 0,
						opacity: 1,
						transition: { duration, ease: 'easeOut' },
					},
				};
			case 'down':
				return {
					hidden: { y: -distance, opacity: 0 },
					visible: {
						y: 0,
						opacity: 1,
						transition: { duration, ease: 'easeOut' },
					},
				};
			case 'left':
				return {
					hidden: { x: -distance, opacity: 0 },
					visible: {
						x: 0,
						opacity: 1,
						transition: { duration, ease: 'easeOut' },
					},
				};
			case 'right':
				return {
					hidden: { x: distance, opacity: 0 },
					visible: {
						x: 0,
						opacity: 1,
						transition: { duration, ease: 'easeOut' },
					},
				};
			case 'scale':
				return {
					hidden: { scale: 0.8, opacity: 0 },
					visible: {
						scale: 1,
						opacity: 1,
						transition: { duration, ease: 'easeOut' },
					},
				};
			case 'fade':
			default:
				return {
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: { duration, ease: 'easeOut' },
					},
				};
		}
	};

	useEffect(() => {
		if (isInView) {
			controls.start('visible');
		}
	}, [isInView, controls]);

	return (
		<motion.div ref={ref} className={className} initial='hidden' animate={controls} variants={containerVariants}>
			{Array.isArray(children)
				? children.map((child, index) => (
						<motion.div key={index} variants={getChildVariants()}>
							{child}
						</motion.div>
				  ))
				: children}
		</motion.div>
	);
};
