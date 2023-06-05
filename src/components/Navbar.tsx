"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiAlignRight, FiSearch, FiShoppingCart, FiX } from "react-icons/fi";
import { navItems } from "@/Data/Navbar-data";
import Link from "next/link";

export default function Navbar() {
  const [mobNav, setMobNav] = useState(false);

  return (
    <div className="">
      <div className=" bg-red-200 pt-8 pb-2 px-2 flex justify-between">
        {/* logo */}
        <div className="p-2">
          <Image src="/Logo.webp" alt="logo" height={1} width={140} />
        </div>
        {/* navbar items */}
        <div className="bg-green-200 hidden md:flex justify-between items-center gap-x-20">
          {navItems.map((items: { navList: string; href: string }, i) => {
            return (
              <div key={i} className="">
                <Link href={items.href}>{items.navList}</Link>
              </div>
            );
          })}
        </div>
        {/* search box */}
        <div className="hidden md:flex justify-center items-center border rounded-lg">
          <FiSearch />
          <input
            type="text"
            className="w-80"
            placeholder="What are you looking for"
          />
        </div>
        {/* cart */}
        <div className="w-11 h-11 rounded-full bg-gray-200 justify-center items-center hidden md:flex">
          <FiShoppingCart size={20} />
        </div>
        {/* Hamburger icon*/}
        <div onClick={() => setMobNav(!mobNav)} className="md:hidden">
          <FiAlignRight size="25" className="cursor-pointer mr-1.5 m-1.5" />
        </div>
        {mobNav && (
          <div className="fixed md:hidden left-0 top-0 w-full h-screen bg-black/70">
            <div className="fixed z-20 right-0 top-0 w-[100%] sm:w-[60%] md:[45%] h-screen bg-white p-4 ease-in duration-500">
              <div className="flex justify-between pt-4">
                <div>
                  <Image src="/Logo.webp" alt="logo" width={140} height={40} />
                </div>
                <FiX size={25}
                  onClick={() => {
                    // setProMenu(false);
                    setMobNav(!mobNav);
                  }}
                  className="cursor-pointer"
                />
              </div>
              <div className="leading-10 pt-10 text-md text-center">
                <ul>
                  {navItems.map(
                    (items: { navList: string; href: string }, i) => (
                      <li
                        onClick={() => {
                          setMobNav(!mobNav);
                          // setProMenu(false);
                        }}
                        key={i}
                      >
                        <Link href={items.href}>{items.navList}</Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
