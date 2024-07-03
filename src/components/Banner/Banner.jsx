import React from "react";
import banner from "@/assets/banner.png";
import Image from "next/image";
export default function Banner() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${'https://i.postimg.cc/L8Bw6C8d/banner.png'})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

        }}
        className="min-h-[calc(100vh-70px)] min-w-full mt-1 rounded-3xl"
      >

        <div className="min-h-[calc(100vh-70px)] w-full bg-black/15  rounded-3xl" >

        </div>
      </section>
    </>
  );
}
