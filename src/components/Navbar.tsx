"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiAlignRight, FiSearch, FiShoppingCart, FiX } from "react-icons/fi";
import { navItems } from "@/Data/Navbar-data";
import Link from "next/link";
import Hambuger from "./Hambuger";
import CartButton from "./CartButton";
import { getData } from "./dbFetch";
import { cartItems } from "@/drizzle/lib/drizzle";

export default async function Navbar() {
  const res: cartItems[] = await getData();
  console.log(`NavCart`, res.length);
  return (
    <>
      <div className="border pt-8 pb-2 px-2 flex justify-between">
        {/* logo */}
        <Link href="/">
          <div className="py-[0.45rem] bg-red-400">
            <Image
              src="/Logo.png"
              alt="dinemartlogo"
              height={100}
              width={140}
            />
          </div>
        </Link>
        {/* navbar items */}
        <div className="hidden lg:flex justify-between items-center gap-x-20">
          {navItems.map((items: { navList: string; href: string }, i) => {
            return (
              <div key={i} className="text-md lg:text-md">
                <Link href={items.href}>{items.navList}</Link>
              </div>
            );
          })}
        </div>
        {/* search box */}
        <div className="hidden lg:flex justify-center items-center  rounded-lg gap-2 pl-2 relative">
          <FiSearch className="absolute left-4" />
          <input
            type="text"
            className="w-[22rem] h-8 text-sm font-thin border rounded-lg pl-8"
            placeholder="What are you looking for"
          />
        </div>
        {/* cart */}
        <div>
          <CartButton res={res} />
        </div>
        {/* Hamburger icon*/}
        <Hambuger res={res} />
      </div>
    </>
  );
}
