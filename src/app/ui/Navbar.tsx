'use client';
import Link from 'next/link';
import Image from 'next/image'
import clsx from 'clsx'
import { useState } from 'react';   

const Navbar: React.FC = () => {
	const [isNavbarOpen, setNavbarOpen] = useState(false);

    const handlerNavbarOpenOrHide = () => {
        setNavbarOpen(!isNavbarOpen)
    }

	const handlerNavBarClose = () => {
		setNavbarOpen(false)
	}

	return (
		<>
			<button type="button" onClick={handlerNavbarOpenOrHide} className='hidden max-sm:block max-sm:absolute max-sm:right-4 p-4 max-sm:z-50' aria-label='Abrir menu hamburguer'>
                {
                    isNavbarOpen ? 
                    (<Image src='icon-menu-close.svg' alt='Menu Hamburguer' width="32" height="31" aria-hidden='true'/>) 
                    : (<Image src='icon-menu.svg' alt='Menu Hamburguer' width="40" height="17" aria-hidden='true'/>)
                }
            </button>
            {isNavbarOpen && <div className='absolute h-screen w-screen top-0 left-0 -z-10 bg-neutral-dark-grayish/40'></div>}
			<ul className={clsx('flex gap-6 max-sm:flex-col max-sm:h-[100vh] max-sm:fixed max-sm:top-0 max-sm:right-0 max-sm:text-left max-sm:px-8 max-sm:z-40 max-sm:pt-24 max-sm:w-8/12 max-sm:transition-transform max-sm:duration-300 max-sm:bg-neutral-grayish', isNavbarOpen ? 'max-sm:translate-x-0' : 'max-sm:translate-x-full')}>
				<li>
					<Link
						href={'/'}
						className={clsx("max-sm:text-black sm:text-neutral-dark-grayish hover:text-primary-red py-2 w-full block text-lg transition-opacity opacity-100", !isNavbarOpen && 'opacity-0')}
                        onClick={handlerNavBarClose}
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						href={'#'}
						className={clsx("max-sm:text-black sm:text-neutral-dark-grayish hover:text-primary-red py-2 w-full block text-lg transition-opacity opacity-100", !isNavbarOpen && 'opacity-0')}
                        onClick={handlerNavBarClose}
					>
						New
					</Link>
				</li>
				<li>
					<Link
						href={'#'}
						className={clsx("max-sm:text-black sm:text-neutral-dark-grayish hover:text-primary-red py-2 w-full block text-lg transition-opacity opacity-100", !isNavbarOpen && 'opacity-0')}
                        onClick={handlerNavBarClose}
					>
						Popular
					</Link>
				</li>
				<li>
					<Link
						href={'#'}
						className={clsx("max-sm:text-black sm:text-neutral-dark-grayish hover:text-primary-red py-2 w-full block text-lg transition-opacity opacity-100", !isNavbarOpen && 'opacity-0')}
                        onClick={handlerNavBarClose}
					>
						Trending
					</Link>
				</li>
				<li>
					<Link
						href={'#'}
						className={clsx("max-sm:text-black sm:text-neutral-dark-grayish hover:text-primary-red py-2 w-full block text-lg transition-opacity opacity-100", !isNavbarOpen && 'opacity-0')}
                        onClick={handlerNavBarClose}
					>
						Categories
					</Link>
				</li>
			</ul>
		</>
	);
};
export default Navbar;
