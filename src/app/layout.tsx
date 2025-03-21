import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import Header from '@/app/layout/header';

const raleway = Raleway({
	weight: ['400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={raleway.className}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
