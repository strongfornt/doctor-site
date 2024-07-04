import React from "react";
import Image from "next/image";
import Profile1 from "@/assets/test3.webp";
import p1 from "@/assets/Ellipse-10.png"
import p2 from "@/assets/Ellipse-5.png"
import p3 from "@/assets/Elips2.png"
import Star from "./Star";

export default function Review() {
  return (
    <>
      <button className="text-[#020043]  border border-[#4D4C7B] px-4 py-1 rounded-3xl ">
        Testimonial
      </button>
      <h1 class="text-xl md:text-2xl font-semibold my-4 md:my-6 text-[#020043] lg:text-3xl ">
        What they say about us
      </h1>
      <section className="grid md:grid-cols-3 items-center justify-center gap-4">
        <div class="w-full hidden md:flex max-w-sm overflow-hidden bg-[#FFFFF5] rounded-lg shadow ">
          <div class="px-6 py-4">
            <h1 class="text-xl font-semibold text-[#020043]">
              Expertise and Compassion Combined
            </h1>

            <p class="py-2 text-[#4D4C7B] text-xs">
              I can&apos;t thank enough for their exceptional care. The doctors
              and staff showed incredible expertise and compassion throughout my
              treatment journey. I felt truly cared for every step of the way.
            </p>

            <div class="flex items-center mt-4 ">
              <div class="relative">
                <Image
                  class="object-cover w-12 h-12 rounded-full   "
                  src={p1}
                  alt="pp"
                />
              </div>

              <div className=" px-2   ">
                <h1 class="text-sm font-medium text-[#020043] ">
                  Sarah D,
                  <span className="font-normal text-[#4D4C7B]">
                    {" "}
                    IT Professional
                  </span>
                </h1>
                <div className="">
                  <Star value={5} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* review no two */}
        <div class="w-full max-w-sm overflow-hidden bg-[#FFFFF5] rounded-lg shadow ">
          <div class="px-6 py-4">
            <h1 class="text-xl font-semibold text-[#020043]">
              Expertise and Compassion Combined
            </h1>

            <p class="py-2 text-[#4D4C7B] text-xs">
              I can&apos;t thank enough for their exceptional care. The doctors
              and staff showed incredible expertise and compassion throughout my
              treatment journey. I felt truly cared for every step of the way.
            </p>

            <div class="flex items-center mt-4 ">
              <div class="relative">
                <Image
                  class="object-cover w-12 h-12 rounded-full   "
                  src={p3}
                  alt="pp"
                />
              </div>

              <div className=" px-2   ">
                <h1 class="text-sm font-medium text-[#020043] ">
                  Michael R,
                  <span className="font-normal text-[#4D4C7B]">
                    {" "}
                    Business Executive
                  </span>
                </h1>
                <div className="">
                  <Star value={4} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* review no two */}
        {/* review three */}
        <div class="w-full hidden md:flex max-w-sm overflow-hidden bg-[#FFFFF5] rounded-lg shadow ">
          <div class="px-6 py-4">
            <h1 class="text-xl font-semibold text-[#020043]">
              Expertise and Compassion Combined
            </h1>

            <p class="py-2 text-[#4D4C7B] text-xs">
              I can&apos;t thank enough for their exceptional care. The doctors
              and staff showed incredible expertise and compassion throughout my
              treatment journey. I felt truly cared for every step of the way.
            </p>

            <div class="flex items-center mt-4 ">
              <div class="relative">
                <Image
                  class="object-cover w-12 h-12 rounded-full   "
                  src={p2}
                  alt="pp"
                />
              </div>

              <div className=" px-2   ">
                <h1 class="text-sm font-medium text-[#020043] ">
                  David S,
                  <span className="font-normal text-[#4D4C7B]"> Lawyer</span>
                </h1>
                <div className="">
                  <Star value={5} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* review three */}
      </section>
      <div className="flex gap-3 justify-center mt-3">
        <p className="bg-[#dedcdc] hidden md:flex  rounded-full w-2 h-2"></p>
        <p className="bg-[#FFC637] rounded-full w-2 h-2"></p>
        <p className="bg-[#dedcdc] hidden md:flex rounded-full w-2 h-2"></p>
      </div>
    </>
  );
}
