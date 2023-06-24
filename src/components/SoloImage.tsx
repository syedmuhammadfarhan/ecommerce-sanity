"use client";
import React, { useState } from "react";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/Ai";
import { FiShoppingCart } from "react-icons/fi";
import { sizeChart } from "@/Data/data";
import { useRouter } from "next/navigation";
import { IProduct } from "./cmsFetch";

export default function SoloImage({ data }: { data: IProduct[] }) {
  const [index, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const { refresh } = useRouter();
  console.log(size);
  const handleMouseEnter = (i: number) => {
    setIndex(i);
  };

  const handleSize = (name: string) => {
    setSize(name);
  };

  const quantityIncrement = () => {
    setQuantity(quantity + 1);
  };
  const quantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = async () => {
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({
          product_id: data[0]._id,
          size: size,
          quantity: quantity,
        }),
      });
      refresh();
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      {/* data is coming from soloproducts/[id]/page.tsx */}
      {
        <div className="flex gap-x-8 pt-24">
          <div>
            {data[0].image.map((images:any, i: number) => (
              <div
                key={i}
                className="border border-red-400 w-24 h-[6.3rem] overflow-hidden mb-4"
              >
                <div>
                  <Image
                    onMouseEnter={() => {
                      handleMouseEnter(i);
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
                {sizeChart.map((items, i) => (
                  <div
                    key={i}
                    className="border rounded-full w-9 h-9 text-slate-500 font-semibold flex items-center justify-center hover:bg-black hover:text-white cursor-pointer text-sm"
                    onClick={() => handleSize(items.name)}
                  >
                    <p>{items.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-x-8 border mb-8">
              <div className="font-bold">Quantity:</div>
              <div className="flex">
                <span
                  className="border px-2 flex items-center hover:bg-black hover:text-white cursor-pointer"
                  onClick={quantityDecrement}
                >
                  <AiOutlineMinus />
                </span>
                <span className="border px-4 flex items-center">
                  {quantity}
                </span>
                <span
                  className="border px-2 flex items-center hover:bg-black hover:text-white cursor-pointer"
                  onClick={quantityIncrement}
                >
                  <AiOutlinePlus />
                </span>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <button
                className="flex justify-center items-center gap-x-2 border  rounded-lg  bg-black px-4 py-2 text-white text-sm  hover:scale-105 hover:ring-red-500 ring-1"
                onClick={handleAddToCart}
              >
                <FiShoppingCart />
                Add to Cart
              </button>
              <p className="text-2xl font-bold">$ {data[0].price}</p>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
