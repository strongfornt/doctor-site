import Image from "next/image";
import React from "react";
import Group12 from "@/assets/Group-12.png";
import Group2 from "@/assets/Group2.png";
import C from "@/assets/Contract1.png";
import p1 from "@/assets/Elips2.png";
import p2 from "@/assets/Elips-3.png";
import p3 from "@/assets/Ellipse-4.png";
import p4 from "@/assets/Ellipse-5.png";
import p5 from "@/assets/Ellipse-10.png";
import star from "@/assets/Star.png"
import coin from "@/assets/coin.png"
export default function Care() {
  return (
    <>
      <section className="lg:flex justify-between">
        {/* card 1 start */}
        <div className="bg-[#FBFBFB] border border-[#02004333] hidden lg:flex flex-col p-5 rounded-2xl space-y-4 max-w-44 ">
          <div className="text-4xl text-[#020043] space-y-1 font-semibold ">
            <p>
            90%
            </p>
            <p className="font-normal text-[#020043]   text-xs">
              Patient satisfaction rate, reflecting our commitment.
            </p>
          </div>
          <div className="ml-4 ">
            <Image src={Group12} height={100} width={100} alt="group12" />
          </div>
        </div>
        {/* card 1 start */}
           <div className="" >
            <h1 className="text-[#020043] font-semibold mb-5  text-center text-3xl md:text-4xl " >
            Comprehensive Care <br />  for Every Patient
            </h1>
           <div className="flex gap-4  lg:gap-6 xl:gap-10 items-end  " >
        <div className="bg-[#FFFFF5] border border-[#02004333] overflow-hidden flex flex-col h-fit px-2 md:px-5 pb-2 pt-3 rounded-2xl  max-w-80 flex-1 ">
          <h4 className=" text-2xl md:text-4xl text-[#020043] font-semibold ">
            500+
            <p className="font-normal text-[#020043] text-xs">
            Board-certified <br />  doctors
            </p>
          </h4>
          <div className="  md:ml-20  md:-translate-y-2  w-full  ">
            <Image src={C} height={60} width={60} alt="group12" className="" />
          </div>
        </div>
        <div className="bg-[#FBFBFB] border border-[#02004333] overflow-hidden flex flex-col h-fit px-2 md:px-5 pb-2 pt-4 rounded-2xl  max-w-96 flex-1 ">
          <h4 className=" text-2xl md:text-4xl flex gap-2 items-center text-[#020043] font-semibold ">
            4.8 <Image src={star} height={500} width={500} alt="group12" className=" h-5 w-5 md:h-7 md:w-7" />
          
          </h4>
          <p className="font-normal text-[#020043] text-xs">
            Over 20,000 Patient
            </p>
          <div className="  mt-4 flex  ">
            <Image src={p1} height={500} width={500} alt="group12" className=" h-5 w-5 md:h-8 md:w-8" />
            <Image src={p2} height={500} width={500} alt="group12" className=" h-5 w-5 md:h-8 md:w-8 -translate-x-3 " />
            <Image src={p3} height={500} width={500} alt="group12" className=" h-5 w-5 md:h-8 md:w-8 -translate-x-6 " />
            <Image src={p4} height={500} width={500} alt="group12" className=" h-5 w-5 md:h-8 md:w-8 -translate-x-9 " />
          </div>
        </div>
        <div className="bg-[#FFFFF5] border border-[#02004333] overflow-hidden flex flex-col px-2 md:px-5 pb-2 pt-4 h-full rounded-2xl  max-w-80 flex-1 ">
          <h4 className=" text-2xl md:text-4xl text-[#020043] font-semibold ">
          $5000
            <p className="font-normal text-[#020043] text-xs">
            Money spend <br />
            for poor patient
            </p>
          </h4>
          <div className="md:ml-20  md:-translate-y-2 w-full  ">
            <Image src={coin} height={60} width={60} alt="group12" className="h-[52px] " />
          </div>
        </div>
        </div>
           </div>
        {/* card 4 start */}
        <div className="flex justify-evenly mt-4 lg:mt-0" >
        <div className="bg-[#FBFBFB] border border-[#02004333] lg:hidden p-5 rounded-2xl space-y-4 max-w-44 ">
          <div className="text-4xl text-[#020043] space-y-1 font-semibold ">
            <p>
            90%
            </p>
            <p className="font-normal text-[#020043]   text-xs">
              Patient satisfaction rate, reflecting our commitment.
            </p>
          </div>
          <div className="ml-4 ">
            <Image src={Group12} height={100} width={100} alt="group12" />
          </div>
        </div>
        <div className="bg-[#FBFBFB] border border-[#02004333] overflow-hidden p-5 rounded-2xl space-y-4 max-w-44 ">
          <div className="text-4xl space-y-1 text-[#020043] font-semibold ">
            <p>
            50+
            </p>
            <p className="font-normal text-[#020043] text-xs">
              Free lession video for patient
            </p>
          </div>
          <div className="ml-4  h-full ">
            <Image src={Group2} height={100} width={100} alt="group12" className="mt-8" />
          </div>
        </div>
        </div>
        
        {/* card 4 start */}
      </section>
    </>
  );
}
