import Image from "next/image";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="flex justify-center items-center">
      <div className="basis-1/2">
        <button className="bg-[#e1edff] font-[600] text-indigo-700 text-lg py-2 px-6 rounded-md">
          Sale 70%
        </button>
        <h1 className="text-6xl font-extrabold">
          An Industrial Take on Streetwear
        </h1>
        <p className="text-lg text-gray-400 font-light">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
              </p>
              <div className="flex justify-center items-center bg-black max-w-fit p-6 gap-x-4">
                  <FiShoppingCart size={20} color="white"/>
                  <p className="text-white">Start Shopping</p>
              </div>
      </div>

      <div className="basis-1/2 flex justify-center items-center">
        <Image src="/header.png" alt="hero" width={50} height={50} />
      </div>
    </div>
  );
}
