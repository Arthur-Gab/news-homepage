'use client';
import Link from 'next/link';
import Image from 'next/image'
import clsx from 'clsx'
import { useState } from 'react';   

const Navbar = () => {
	const [isNavbarOpen, setNavbarOpen] = useState(false);

    const handlerNavbarOpenOrHide = () => {
        setNavbarOpen(!isNavbarOpen)
    }

	return (
		<>
			<button type="button" onClick={handlerNavbarOpenOrHide} className='hidden max-sm:block max-sm:fixed max-sm:right-4 p-4 max-sm:z-50'>
                {
                    isNavbarOpen ? 
                    (<Image src='icon-menu-close.svg' alt='Menu Hamburguer' width="32" height="31" aria-hidden='true'/>) 
                    : (<Image src='icon-menu.svg' alt='Menu Hamburguer' width="40" height="17" aria-hidden='true'/>)
                }
            </button>
            {isNavbarOpen && <div className='absolute h-screen w-screen top-0 left-0 -z-10 bg-neutral-dark-grayish/40'></div>}
			<ul className={clsx('flex gap-6 max-sm:flex-col max-sm:h-[100dvh] max-sm:fixed max-sm:top-0 max-sm:right-0 max-sm:text-left max-sm:px-8 max-sm:z-40 max-sm:pt-24 max-sm:w-8/12 max-sm:transition-transform max-sm:duration-300 max-sm:bg-neutral-grayish', isNavbarOpen ? 'max-sm:translate-x-0' : 'max-sm:translate-x-full')}>
				<li>
					<Link
						href={'/'}
						className={clsx("sm:text-neutral-dark-grayish hover:text-primary-red py-2 w-full block text-lg transition-opacity", isNavbarOpen ? 'opacity-1' : 'opacity-0')}
                        onClick={handlerNavbarOpenOrHide}
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						href={'#'}
						className={clsx("sm:text-neutral-dark-grayish hover:text-primary-red py-2 w-full block text-lg transition-opacity", isNavbarOpen ? 'opacity-1' : 'opacity-0')}
                        onClick={handlerNavbarOpenOrHide}
					>
						New
					</Link>
				</li>
				<li>
					<Link
						href={'#'}
						className={clsx("sm:text-neutral-dark-grayish hover:text-primary-red py-2 w-full block text-lg transition-opacity", isNavbarOpen ? 'opacity-1' : 'opacity-0')}
                        onClick={handlerNavbarOpenOrHide}
					>
						Popular
					</Link>
				</li>
				<li>
					<Link
						href={'#'}
						className={clsx("sm:text-neutral-dark-grayish hover:text-primary-red py-2 w-full block text-lg transition-opacity", isNavbarOpen ? 'opacity-1' : 'opacity-0')}
                        onClick={handlerNavbarOpenOrHide}
					>
						Trending
					</Link>
				</li>
				<li>
					<Link
						href={'#'}
						className={clsx("sm:text-neutral-dark-grayish hover:text-primary-red py-2 w-full block text-lg transition-opacity", isNavbarOpen ? 'opacity-1' : 'opacity-0')}
                        onClick={handlerNavbarOpenOrHide}
					>
						Categories
					</Link>
				</li>
			</ul>
		</>
	);
};
export default Navbar;
