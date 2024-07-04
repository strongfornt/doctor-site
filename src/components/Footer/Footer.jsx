import React from "react";
import { LiaLinkedinIn } from "react-icons/lia";
import { PiInstagramLogo } from "react-icons/pi";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/logo-light.png";

export default function Footer() {
  return (
    <>
      <footer className="px-4 xl:px-20 divide-y mt-4 bg-[#020043] text-[#FFFFF5] text-sm  ">
        <div className="container grid grid-cols-2 md:grid-cols-0 md:flex justify-between py-24 space-y-8 lg:space-y-0 px-2  md:px-4 ">
          <div className=" space-y-3 relative col-span-2">
            <div className="flex absolute -translate-y-12 items-center justify-center w-24 h-12  ">
              <Image
                src={logo}
                height={500}
                width={500}
                alt="logo"
                className="w-20 h-6"
              />
            </div>

            <p>
              123 Main Street Anytown, USA <br /> Postal Code: 12345
            </p>
            <p>
              Support: support@oyolloo.com <br />
              (Available : 10:00am to 07:00pm)
            </p>
          </div>
          <div className="space-y-3">
            {/* <h3 className="tracking-wide uppercase ">Home</h3> */}
            <ul className="space-y-2 ">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Home
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  About us
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Success page
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Terms And Condition
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3 ">
            <ul className="space-y-2">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Services
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Scheduling
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Contact us
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Patient Portal
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-1   ">
            <div className=" ">Follow Us</div>
            <div className="flex mb-3 justify-start space-x-3">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Instagram"
                className=" flex items-center   text-2xl"
              >
                <PiInstagramLogo />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Linkedin"
                className="   flex items-center"
              >
                {/* <LiaLinkedinIn /> */}
                <FaLinkedin className="text-2xl " />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Youtube"
                className="  flex items-center  rounded-full  text-white text-2xl"
              >
                <FaYoutube />
              </a>
            </div>
            <div>
              <p className="mt-5">@docplus 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
