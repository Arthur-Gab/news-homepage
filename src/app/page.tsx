import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from './ui/Navbar';

export default function Home() {
	return (
		<header>
			<nav className="relative container mx-auto px-4 py-6 flex justify-between items-center">
				<Link href={'/'}>
					<Image
						src={'logo.svg'}
						alt="Logo"
						width={65}
						height={40}
					/>
				</Link>
				<Navbar/>
			</nav>
		</header>
	);
}
