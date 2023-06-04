'use client'
import React, { useState } from "react";
import Image from "next/image";
import { FiAlignRight, FiShoppingCart } from "react-icons/fi";
import { navItems } from "@/Data/Navbar-data";
import Link from "next/link";

export default function Navbar() {
  const [mobNav, setMobNav] = useState(false);
  
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-7xl bg-red-200 p-2 flex justify-between">
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
        <form
          action=""
          className="hidden md:flex justify-center items-center max-w-4xl w-72 bg-red-400"
        >
          <input type="text" className="w-full rounded-sm" />
        </form>
        {/* cart */}
        <div className="w-11 h-11 rounded-full bg-gray-200 justify-center items-center hidden md:flex">
          <FiShoppingCart size={20} />
        </div>
        {/* Hamburger icon*/}
        <div onClick={() => setMobNav(!mobNav)} className="md:hidden">
          <FiAlignRight size="25" className="cursor-pointer mr-1.5 m-1.5" />
        </div>
      </div>
    </div>
  );
}
