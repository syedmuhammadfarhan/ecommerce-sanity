import { Wrapper } from "@/shared/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";



export default function Hero() {
  return (
    <>
      <div className="border flex flex-1 justify-between gap-[2rem] pt-16">
        <div className="flex flex-1 flex-col border border-red-400 pl-1 py-10 space-y-10">
          <span className="bg-[#e1edff] font-[600] text-indigo-700 text-lg py-2 px-6 rounded-md max-w-fit">
            Sale 70%
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
            An Industrial Take on Streetwear
          </h1>
          <p className="text-md text-gray-400 font-light">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <Link href="products/Allproducts" passHref>
            <button
              type="button"
              className="flex justify-between items-center gap-3 bg-black px-4 py-2 text-white text-center font-bold text-md border-2 border-gray-400"
            >
              <FiShoppingCart size={20} color="white" />
              Start Shopping
            </button>
          </Link>
          <div className="flex flex-wrap gap-x-16 gap-y-6 md:gap-x-9 p-1">
            <Image
              src="/Featured1.png"
              alt="Feature1"
              width={100}
              height={90}
            ></Image>
            <Image
              src="/Featured2.png"
              alt="Feature1"
              width={100}
              height={90}
            ></Image>
            <Image
              src="/Featured3.png"
              alt="Feature1"
              width={100}
              height={90}
            ></Image>
            <Image
              src="/Featured4.png"
              alt="Feature1"
              width={100}
              height={90}
            ></Image>
          </div>
        </div>
        <div className="border hidden lg:flex flex-1 justify-center w-[40rem] h-[37rem]">
          <div className="bg-[#FFECE3] relative w-[37rem] h-[37rem] rounded-full flex-1"></div>
          <Image
            src="/header.png"
            alt="hero"
            width={680}
            height={500}
            className="absolute top-[7rem]"
          />
        </div>
      </div>
    </>
  );
}
