'use client';
import Features from '@/app/components/home/features';
import Hero from '@/app/components/home/hero';
import ReactLenis from 'lenis/react';

export default function Home() {
	return (
		<ReactLenis root>
			<Hero />
			<Features />
		</ReactLenis>
	);
}
