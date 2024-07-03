import React from 'react'
import banner from '@/assets/banner.png'
import Image from 'next/image'
export default function Banner() {
  return (
   <>
    <section className="">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<Image src={banner} width={1000} height={1000} alt='banner' />
		</div>
		
	</div>
</section>
   </>
  )
}
