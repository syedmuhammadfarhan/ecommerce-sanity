"use client";
import React, { useState } from "react";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { sizeChart } from "@/Data/data";
import { useRouter } from "next/navigation";
import { IProduct } from "./cmsFetch";

export default function SoloImage({ data }: { data: IProduct[] }) {
  const [index, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const { refresh } = useRouter();
  // console.log(size);
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
          price: data[0].price,
          title: data[0].title,
          product_image: urlForImage(data[0].image[0]).url(),
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
        <div className="lg:flex gap-x-6 pt-24">
          <div className="flex gap-x-4 lg:gap-x-8 px-2">
            <div>
              {data[0].image.map((images: any, i: number) => (
                <div
                  key={i}
                  className="border border-red-400 lg:w-24 lg:h-[6.3rem] overflow-hidden mb-4"
                >
                  <div className="flex flex-1">
                    <Image
                      onMouseEnter={() => {
                        handleMouseEnter(i);
                      }}
                      className="lg:max-h-[6.3rem] lg:max-w-[6rem] object-cover"
                      src={urlForImage(images).url()}
                      alt="productimage"
                      width={100}
                      height={120}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex border border-red-400 md:w-[40rem] md:h-[42rem] overflow-hidden">
              <Image
                className="md:max-h-[42rem] md:max-w-[40rem] object-cover"
                src={urlForImage(data[0].image[index]).url()}
                alt="productimage"
                width={1000}
                height={800}
              />
            </div>
          </div>
          {/* 3rd column of solo product page */}
          <div className="border border-red-400 mb-2 lg:mb-0 mt-2 lg:mt-0 p-2">
            <div className="text-lg md:text-2xl font-extrabold mb-1">
              {data[0].title}
            </div>
            <div className="md:text-lg text-slate-400 font-bold mb-6">
              {data[0].generic.name}
            </div>
            <div className="border mb-6">
              <div className="text-sm font-bold mb-2">Select Size</div>
              <div className="flex gap-x-5">
                {sizeChart.map((items, i) => (
                  <div
                    key={i}
                    className="border rounded-full w-7 h-7 text-slate-500 font-semibold flex items-center justify-center hover:bg-black hover:text-white cursor-pointer text-sm"
                    onClick={() => handleSize(items.name)}
                  >
                    <p>{items.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center gap-x-8 border mb-8">
              <div className="text-sm font-bold">Quantity:</div>
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
                className="flex justify-center items-center gap-y-2 md:gap-x-2 border rounded-lg bg-black px-4 py-2 text-white text-xs md:text-sm  hover:scale-95 hover:ring-red-500 ring-1"
                onClick={handleAddToCart}
              >
                <FiShoppingCart size={18} />
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
