import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import Image from 'next/image'
import logo from '@/assets/logo-dark.png'
export default function Header() {
  return (
  <>
    <header className=" py-1 md:py-3  ">
	<div className="container flex justify-between items-center mx-auto">
		<Image src={logo} height={500} width={500} alt='logo' className='w-20 h-6' />
		<ul className="items-stretch hidden space-x-3 lg:flex text-sm ">
			<li className="flex">
				<a   href="#" className="flex items-center px-4 text-color ">Home</a>
			</li>
			<li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4     ">Services</a>
			</li>
			<li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4    ">Blog</a>
			</li>
			<li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4  ">About us</a>
			</li>
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			
			<button className="self-center flex items-center gap-1 px-4 border py-2 font-medium rounded-xl"><span>Appointment</span> <GoArrowUpRight /></button>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
  </>
  )
}
