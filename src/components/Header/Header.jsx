import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import logo from "@/assets/logo-dark.png";
import ResponsiveMenu from "./ResponsiveMenu";

export default function Header() {
  return (
    <>
      <header className=" py-3   ">
        <div className="container flex justify-between items-center mx-auto">
          <Image
            src={logo}
            height={500}
            width={500}
            alt="logo"
            className="w-20 h-6"
          />
          <ul className="items-stretch hidden space-x-3 text-[#020043] lg:flex text-sm ">
            <li className="flex">
              <a href="#Home" className="flex items-center  px-4  ">
                Home
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#services"
                className="flex items-center px-4     "
              >
                Services
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4    "
              >
                Blog
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#about"
                className="flex items-center px-4  "
              >
                About us
              </a>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="self-center flex text-base items-center gap-1 text-[#020043] px-4 border border-[#343268] py-2 font-semibold rounded-xl">
              <span>Appointment</span> <GoArrowUpRight />
            </button>
          </div>
		 
        <div className="lg:hidden" >
		<ResponsiveMenu/>
		</div>
        </div>
      </header>
    </>
  );
}
