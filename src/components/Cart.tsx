"use client";
import React, { useState } from "react";
import { cartItems } from "@/drizzle/lib/drizzle";
import { TiTrash } from "react-icons/Ti";
import { useRouter } from "next/navigation";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/Ai";
import QuantityButton from "../components/QuantityButton";
import { IProduct, getProductData } from "../components/cmsFetch";
import { getData } from "./dbFetch";

export default async function Cart() {
  const { refresh } = useRouter();
  const res: cartItems[] = await getData();
  console.log(`this is cart db`, res[0].product_id);
  const data: IProduct[] = await getProductData();
  console.log(`this is cart cms`, data);
  return (
    <>
      <div>
        <h1 className="text-xl font-extrabold mt-12 mb-6">Shopping Cart</h1>
      </div>
      <div className="border border-blue-400 md:flex flex-between">
        {/* product details */}

        <div className="border border-black flex flex-col w-full gap-y-8">
          {res.map((items) => (
            <div className="flex flex-col md:flex-row border border-green-500 p-1">
              <div className="flex-none border border-red-400 h-24 w-20 md:h-48 md:w-44 rounded-lg">
                image
              </div>
              <div className="md:ml-5 ml-0 border border-red-400 rounded-lg w-full flex flex-col justify-between">
                <div className="flex justify-between">
                  <div>title</div>
                  <div className="hover:scale-110">
                    <TiTrash size={25} />
                  </div>
                </div>
                <div>generic.name</div>
                <div className="font-bold">Delivery Estimation</div>
                <div className="text-pink-500 font-bold">5 Working Days</div>
                {/* price and quantity div */}
                <div className="border flex justify-between">
                  <div>Price</div>
                  <QuantityButton />
                </div>
                {/* price and quantity div ends */}
              </div>
            </div>
          ))}
        </div>
        {/* order summary div */}
        <div className="bg-gray-300 rounded-lg mt-2 md:mt-0">
          <div className="p-2 w-64 h-48 flex-none flex flex-col justify-between border-2">
            <div className="border border-red-400">
              <h2 className="md:text-xl font-bold">Order Summary</h2>
            </div>
            <div className="border border-red-400 flex justify-between">
              <div>Quantity:</div>
              <div>sum</div>
            </div>
            <div className="border border-red-400 flex justify-between">
              <div>Sub Total:</div>
              <div>sum</div>
            </div>
            <div className="border bg-black text-white p-2 rounded-lg text-sm text-center">
              <button>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
