import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function Services() {
    
  return (
    <section className="grid md:grid-cols-2 gap-5 rounded-3xl p-2 md:p-4 lg:px-8 xl:p-10 bg-[#FFFFF5]">
      {/* card 1 */}
      <div class="  ">
        <div class="w-full h-96 relative bg-center bg-cover rounded-3xl ">
          <div className="  space-y-7">
            <button className="text-[#020043]  border   border-[#4D4C7B] px-4 py-1 rounded-3xl ">
              Service
            </button>
            <div className="space-y-5">
              <h3 className="text-[#020043] font-medium text-4xl leading-tight">
                Empowering Health, <br /> Enriching Lives
              </h3>
              <p className="text-xs text-[#4D4C7B] max-w-xs">
                We are committed to providing high-quality, compassionate care
                to every patient we serve. Whatever your healthcare needs may
                be, you can trust us to be your partner in health and wellness.
              </p>
            </div>
            <button className="self-center text-base bg-[#FFC637] flex items-center gap-1 px-2 md:px-4 border py-2 font-medium rounded-xl">
              <span>Appointment</span> <GoArrowUpRight />
            </button>
          </div>
        </div>
      </div>
      {/* card 1 */}
      {/* card 2 start */}
      <div class=" ">
        <div
          class="w-full h-96 relative  bg-center bg-cover rounded-3xl "
          style={{
            backgroundImage: `url(${"https://i.postimg.cc/bYtJB4HR/Rectangle-27-2.png"})`,
          }}
        >
          <div className="max-w-72 py-6 px-3 bg-[#02004378] rounded-xl flex gap-2 items-end absolute bottom-4 left-4">
            <div className="space-y-2">
              <h3 className="text-[#FFFFF5] font-medium text-lg">
                Advanced Technology
              </h3>
              <p className="text-xs text-[#FFFFF5]">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
            </div>
            <div className="text-[#FFFFF5] bg-[#FFC637] h-fit w-fit p-2 text-lg rounded-full ">
              <GoArrowUpRight />
            </div>
          </div>
        </div>
      </div>
      {/* card 2end */}
      {/* card 3 start */}
      <div class=" ">
        <div
          class="w-full h-96 relative  bg-center bg-cover rounded-3xl "
          style={{
            backgroundImage: `url(${"https://i.postimg.cc/nrFjYr8h/Rectangle-27-1.png"})`,
          }}
        >
          <div className="max-w-72 py-6 px-3 bg-[#02004378] rounded-xl flex gap-2 items-end absolute bottom-4 left-4">
            <div className="space-y-2">
              <h3 className="text-[#FFFFF5] font-medium text-lg">
                Online Doctor Meet
              </h3>
              <p className="text-xs text-[#FFFFF5]">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
            </div>
            <div className="text-[#FFFFF5] bg-[#FFC637] h-fit w-fit p-2 text-lg rounded-full ">
              <GoArrowUpRight />
            </div>
          </div>
        </div>
      </div>
      {/* card 3 end */}
      {/* card 4 start */}
      <div class=" ">
        <div
          class="w-full h-96 relative  bg-center bg-cover rounded-3xl "
          style={{
            backgroundImage: `url(${"https://i.postimg.cc/2ymds0n2/Rectangle-27.png"})`,
          }}
        >
          <div className="max-w-72 py-6 px-3 bg-[#02004378] rounded-xl flex gap-2 items-end absolute bottom-4 left-4">
            <div className="space-y-2">
              <h3 className="text-[#FFFFF5] font-medium text-lg">
                Consultancy your health
              </h3>
              <p className="text-xs text-[#FFFFF5]">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
            </div>
            <div className="text-[#FFFFF5] bg-[#FFC637] h-fit w-fit p-2 text-lg rounded-full ">
              <GoArrowUpRight />
            </div>
          </div>
        </div>
      </div>
      {/* card 4 end */}
    </section>
  );
}
