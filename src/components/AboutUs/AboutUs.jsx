import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

export default function AboutUs() {
  return (
    <>
          <section className="grid md:grid-cols-2 gap-5 ">
      {/* card 1 */}
      <div class="  ">
        <div class="w-full h-96 relative bg-center bg-cover rounded-3xl ">
          <div className="  space-y-7">
            <button className="text-[#020043]  border   border-[#4D4C7B] px-4 py-1 rounded-3xl ">
              Who we are
            </button>
            <div className="space-y-4">
              <h3 className="text-[#020043] font-medium text-4xl leading-tight">
              We Help To Get <br /> Soultions
              </h3>
              <p className="text-xs text-[#4D4C7B] max-w-sm leading-5">
              We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.

              </p>
            </div>
           <div>
           <button className="self-center mt-10 text-base bg-[#FFC637] flex items-center gap-1 px-2 md:px-4 border py-2 font-medium rounded-xl">
              <span>Appointment</span> <GoArrowUpRight />
            </button>
           </div>
          </div>
        </div>
      </div>
      {/* card 1 */}
      {/* card 2 start */}
      <div class=" ">
        <div
          class="w-full h-96 relative  bg-center bg-cover rounded-3xl "
          style={{
            backgroundImage: `url(${"https://i.postimg.cc/sXZwdn1h/Rectangle-24.png"})`,
          }}
        >
          <div className="max-w-xs lg:max-w-sm px-7 py-10 bg-[#343268] rounded-3xl flex gap-2 items-end absolute  bottom-3 left-3 lg:-bottom-7 lg:-left-20 xl:-left-28">
            <div className="space-y-4">
              <h3 className="text-[#FFFFF5] font-medium text-lg">
              Our mission is simple
              </h3>
              <p className="text-xs text-[#FFFFF5]">
              To provide high-quality healthcare services  that are accessible, personalized, and <br /> patient-centered.
              </p>
            </div>
            {/* <div className="text-[#FFFFF5] bg-[#FFC637] h-fit w-fit p-2 text-lg rounded-full ">
              <GoArrowUpRight />
            </div> */}
          </div>
        </div>
      </div>
      {/* card 2end */}
   
    </section>
    </>
  )
}
