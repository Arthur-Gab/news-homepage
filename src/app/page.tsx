import Image from 'next/image';
import Link from 'next/link';
import Navbar from './ui/Navbar';
import { inter } from './ui/fonts';
import clsx from 'clsx'

export default function Home() {
	return (
		<>
			<header>
				<nav className="relative container mx-auto px-4 py-6 flex justify-between items-center max-w-7xl">
					<Link href={'/'}>
						<Image
							src={'logo.svg'}
							alt="Logo"
							width={65}
							height={40}
						/>
					</Link>
					<Navbar />
				</nav>
			</header>
			<main>
				<section className='flex max-md:flex-col max-md:gap-12 container mx-auto px-4 md:gap-6 mb-12 max-w-7xl'>
					<article className='flex-1'>
						<Image src={'/image-web-3-desktop.jpg'} alt='The Bright Future of Web 3.0' width={1460} height={600} />
						<div className='mt-4 items-center flex gap-4 max-md:flex-col justify-between'>
							<h1 className='text-neutral-very-dark-grayish text-5xl xl:text-6xl flex-1 font-extrabold'>The Brigth Future of Web 3.0?</h1>
							<div className='flex-col flex gap-6 flex-1'>
								<p className='text-neutral-dark-grayish'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise? </p>
								<Link href={'#'} className={clsx(inter.className, 'w-fit px-8 py-4 bg-primary-red text-neutral-grayish font-bold font-mono tracking-[.3rem] hover:bg-neutral-very-dark-grayish')}>READ MORE</Link>
							</div>
						</div>
					</article>
					<aside className='md:shrink-0 md:w-60 lg:w-[21rem] bg-neutral-very-dark-grayish p-6 h-fit'>
						<h2 className='text-4xl font-extrabold text-primary-orange mb-8'>New</h2>
						<div className='flex flex-col gap-6'>
							<Link href={'#'} className='flex flex-col gap-4 border-b pb-6 border-b-neutral-grayish/75'>
								<h3 className='text-white hover:text-primary-orange text-xl font-bold'>Hydrogen VS Eletric Cars</h3>
								<p className='text-neutral-grayish/75'>Will hydrogen-fueled cars ever catch up to EVs?</p>
							</Link>
							<Link href={'#'} className='flex flex-col gap-4 border-b pb-6 border-b-neutral-grayish/75'>
								<h3 className='text-white hover:text-primary-orange text-xl font-bold'>The Downsides of Al Artistry</h3>
								<p className='text-neutral-grayish/75'>What are the possible adverse effects of on-demand AI image generation?</p>
							</Link>
							<Link href={'#'} className='flex flex-col gap-4 border-b pb-6 border-b-neutral-grayish/75'>
								<h3 className='text-white hover:text-primary-orange text-xl font-bold'>Is VC Funding Drying Up?</h3>
								<p className='text-neutral-grayish/75'>Private founding by VC firms is down 50% YOY. We take a look at what means.</p>
							</Link>
						</div>
					</aside>
				</section>
				<section>

				</section>
			</main>
		</>

	);
}
