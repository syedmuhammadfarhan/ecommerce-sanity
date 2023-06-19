"use client";
import React, { useState } from "react";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { IProduct } from "@/app/page";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/Ai";
import { FiShoppingCart } from "react-icons/fi";
import { sizeChart } from "@/Data/data";

export default function SoloImage({ data }: { data: IProduct[] }) {
  const [index, setIndex] = useState(0);
  const handleClick = (i: number) => {
    setIndex(i);
  };
  return (
    <div>
      {/* data is coming from soloproducts/[id]/page.tsx */}
      {
        <div className="flex gap-x-8 pt-24">
          <div>
            {data[0].image.map((images, i) => (
              <div
                key={i}
                className="border border-red-400 w-24 h-[6.3rem] overflow-hidden mb-4"
              >
                <div>
                  <Image
                    onMouseEnter={() => {
                      handleClick(i);
                    }}
                    className="max-h-[6.3rem] max-w-[6rem] object-cover"
                    src={urlForImage(images).url()}
                    alt="productimage"
                    width={100}
                    height={120}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="border border-red-400 w-[40rem] h-[42rem] overflow-hidden">
            <Image
              className="max-h-[42rem] max-w-[40rem] object-cover"
              src={urlForImage(data[0].image[index]).url()}
              alt="productimage"
              width={1000}
              height={800}
            />
          </div>
          <div className="border border-red-400 ">
            <div className="text-2xl font-bold mb-1">{data[0].title}</div>
            <div className="text-lg text-slate-400 font-bold mb-6">
              {data[0].generic.name}
            </div>
            <div className="border mb-6">
              <div className="text-md font-bold mb-2">SELECT SIZE</div>
              <div className="flex gap-x-5">
                {sizeChart.map((items) => (
                  <p className="border rounded-full w-9 h-9 text-slate-500 font-semibold flex items-center justify-center hover:bg-black hover:text-white cursor-pointer text-sm">
                    {items.name}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex gap-x-8 border mb-8">
              <div className="font-bold">Quantity:</div>
              <div className="flex">
                <span className="border px-2 flex items-center hover:bg-black hover:text-white cursor-pointer">
                  <AiOutlineMinus />
                </span>
                <span className="border px-4 flex items-center">0</span>
                <span className="border px-2 flex items-center hover:bg-black hover:text-white cursor-pointer">
                  <AiOutlinePlus />
                </span>
              </div>
              <div className="flex items-center gap-x-4">
                <button className="flex justify-center items-center gap-x-2 border  rounded-lg  bg-black px-4 py-2 text-white text-sm  hover:bg-green-600">
                  <FiShoppingCart />
                  Add to Cart
                </button>
                <p className="text-xl font-bold">{data[0].price}</p>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
