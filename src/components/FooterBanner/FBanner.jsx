import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import logo from '@/assets/logo-light.png'

export default function FBanner() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${"https://i.postimg.cc/MHHddbCv/Rectangle-32.png"})`,
        }}
        className=" banner min-h-[calc(100vh-70px)] min-w-full mt-1 rounded-3xl bg-cover bg-no-repeat bg-center "
      >
        <div className=" relative min-h-[calc(100vh-70px)] w-full bg-gradient-to-r from-[#020043] to-[#0200434D] rounded-3xl">
  
       <div className="absolute top-8 right-8  md:right-12 md:top-12  xl:right-20 xl:top-20" >
       <Image src={logo} height={500} width={500} alt='logo' className='w-24 h-7' />
       </div>

          <div className="flex flex-col  justify-center ml-6 md:ml-14 lg:ml-20  xl:ml-32 min-h-[calc(100vh-70px)]">
            <h1 className="text-white text-2xl  md:text-3xl  xl:text-4xl leading-10 md:leading-normal">
              Get Your <br /> First Appointment <br /> at 50% Off
            </h1>
            <div className="flex gap-4 md:gap-6 mt-4 md:mt-8">
              <button className="self-center text-base bg-[#FFC637] flex items-center gap-1 px-2 md:px-4 border py-2 font-medium rounded-xl">
                <span>Appointment</span> <GoArrowUpRight />
              </button>
              <button className="self-center text-base text-white flex items-center gap-1 px-2 md:px-4 border py-2 font-medium rounded-xl">
                <span>Learn More</span> <GoArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
