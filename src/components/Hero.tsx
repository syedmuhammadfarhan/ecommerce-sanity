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
              <div className="flex justify-between items-center bg-black max-w-fit px-5 py-4 gap-x-7">
                  <FiShoppingCart size={20} color="white"/>
                  <p className="text-white text-center font-bold">Start<br/>Shopping</p>
              </div>
      <div className="flex gap-x-6">
        <Image src="/Featured1.png" alt="Feature1" width={110} height={110}></Image>
        <Image src="/Featured2.png" alt="Feature1" width={110} height={110}></Image>
        <Image src="/Featured3.png" alt="Feature1" width={110} height={110}></Image>
        <Image src="/Featured4.png" alt="Feature1" width={110} height={110}></Image>
      </div>
      </div>

      <div className="basis-1/2 flex justify-center items-center">
        <Image src="/header.png" alt="hero" width={650} height={650} />
      </div>
    </div>
  );
}
