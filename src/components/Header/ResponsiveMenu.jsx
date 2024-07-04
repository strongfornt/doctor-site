"use client";
import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";

export default function ResponsiveMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("top");
  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}></RadioGroup>
      <button onClick={onOpen} className=" lg:hidden shadow-lg p-3 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-gray-100 dark:text-gray-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay />
        <DrawerContent  >
          <DrawerHeader borderBottomWidth="1px" >
            <button className="self-center flex text-base font-semibold items-center gap-1 text-[#020043] px-3 border border-[#343268] py-2  rounded-xl">
              <span>Appointment</span> <GoArrowUpRight />
            </button>
          </DrawerHeader>
          <DrawerBody>
            <ul>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
