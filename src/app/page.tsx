import Image from 'next/image';
import Link from 'next/link';
import Navbar from './ui/Navbar';
import HomeImage from './ui/HomeImage';
import { inter } from './ui/fonts';
import clsx from 'clsx'

export default function Home() {
	return (
		<>
			<header className='fixed top-0 left-0 w-screen bg-neutral-grayish'>
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
			<main className='mt-24'>
				<section className='flex max-md:flex-col max-md:gap-12 container mx-auto px-4 md:gap-6 mb-12 max-w-7xl'>
					<article className='flex-1'>

						<HomeImage/>

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
							<article>
								<Link href={'#'} className='flex flex-col gap-4 border-b pb-6 border-b-neutral-grayish/75'>
									<h3 className='text-white hover:text-primary-orange text-xl font-bold'>Hydrogen VS Eletric Cars</h3>
									<p className='text-neutral-grayish/75'>Will hydrogen-fueled cars ever catch up to EVs?</p>
								</Link>
							</article>
							<article>
								<Link href={'#'} className='flex flex-col gap-4 border-b pb-6 border-b-neutral-grayish/75'>
									<h3 className='text-white hover:text-primary-orange text-xl font-bold'>The Downsides of Al Artistry</h3>
									<p className='text-neutral-grayish/75'>What are the possible adverse effects of on-demand AI image generation?</p>
								</Link>
							</article>
							<article>
								<Link href={'#'} className='flex flex-col gap-4 border-b'>
									<h3 className='text-white hover:text-primary-orange text-xl font-bold'>Is VC Funding Drying Up?</h3>
									<p className='text-neutral-grayish/75'>Private founding by VC firms is down 50% YOY. We take a look at what means.</p>
								</Link>
							</article>
						</div>
					</aside>
				</section>
				<section className='container mx-auto px-4 max-w-7xl mb-12'>
					<ol className='flex max-sm:flex-col sm:flex-row sm:flex-wrap min-[1122px]:justify-between items-center'>
						<li className='max-w-[342px] mb-8'>
							<article>
								<Link href={'#'} className='flex gap-6'>
									<Image src={'/image-retro-pcs.jpg'} alt='Reviving Retro PCs' width={200} height={254} className='w-32' />
									<div className='flex flex-col justify-between'>
										<span className='text-neutral-dark-grayish/50 font-bold text-4xl' aria-hidden={true}>01</span>
										<h3 className='text-neutral-very-dark-grayish text-lg font-bold'>Revivin Retro PCs</h3>
										<p className='text-neutral-dark-grayish'>
											What happens when old PCs are given modern upgrades?
										</p>
									</div>
								</Link>
							</article>
						</li>
						<li className='max-w-[342px] mb-8'>
							<article>
								<Link href={'#'} className='flex gap-6'>
									<Image src={'/image-top-laptops.jpg'} alt='Reviving Retro PCs' width={200} height={254} className='w-32' />
									<div className='flex flex-col justify-between'>
										<span className='text-neutral-dark-grayish/50 font-bold text-4xl' aria-hidden={true}>02</span>
										<h3 className='text-neutral-very-dark-grayish text-lg font-bold'>Top 10 Laptops of 2022</h3>
										<p className='text-neutral-dark-grayish'>
											Our best picks for various needs and budgets.
										</p>
									</div>
								</Link>
							</article>
						</li>
						<li className='max-w-[342px] mb-8'>
							<article>
								<Link href={'#'} className='flex gap-6'>
									<Image src={'/image-gaming-growth.jpg'} alt='Reviving Retro PCs' width={200} height={254} className='w-32' />
									<div className='flex flex-col justify-between'>
										<span className='text-neutral-dark-grayish/50 font-bold text-4xl' aria-hidden={true}>03</span>
										<h3 className='text-neutral-very-dark-grayish text-lg font-bold'>The Growth of Gaming</h3>
										<p className='text-neutral-dark-grayish'>
											How the pandemic has sparked fresh opportunities.
										</p>
									</div>
								</Link>
							</article>
						</li>
					</ol>
				</section>
			</main>
		</>

	);
}
