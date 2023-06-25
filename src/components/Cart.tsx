"use client";
import React, { useState } from "react";
import { cartItems } from "@/drizzle/lib/drizzle";
import { TiTrash } from "react-icons/Ti";
import { useRouter } from "next/navigation";
import QuantityButton from "../components/QuantityButton";
import { IProduct, getProductData } from "../components/cmsFetch";
import { getData } from "./dbFetch";
import { urlForImage } from "../../sanity/lib/image";
import Image from "next/image";

export default async function Cart() {
  const { refresh } = useRouter();
  const res: cartItems[] = await getData();
  console.log(`this is cart db after GET query`, res);
  // const idToCompare = res.map((items) => items.product_id);
  // console.log(`idToCompare`, idToCompare);
  const data: IProduct[] = await getProductData();
  // console.log(`this is cart cms`, data);

const handleDelete = async (product_id:string) => {
  try {
    if (product_id) {
      const response = await fetch(`/api/cart?product_id=${product_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        refresh();
      } else {
        console.log("Delete request failed with status:", response.status);
      }
    }
  } catch (error) {
    console.log("An error occurred during the delete request:", error);
  }
};


  return (
    <div>
      {res.length ? (
        <>
          <div>
            <h1 className="text-xl font-extrabold mt-12 mb-6">Shopping Cart</h1>
          </div>
          <div className="border border-blue-400 md:flex flex-between">
            {/* product details */}

            <div className="border border-black flex flex-col flex-between w-full">
              {res.map((items) => (
                <div className="flex flex-col md:flex-row border border-green-500 p-1">
                  <div>
                    {data
                      .filter(
                        (filteritem) => filteritem._id === items.product_id
                      )
                      .map((mapitem) => (
                        <div className="flex overflow-hidden object-cover border border-red-400 h-24 w-20 md:h-48 md:w-44 rounded-lg">
                          <Image
                            src={urlForImage(mapitem.image[0]).url()}
                            alt="productimage"
                            width={300}
                            height={300}
                          />
                        </div>
                      ))}
                  </div>
                  <div className="md:ml-5 ml-0 border border-red-400 rounded-lg w-full flex flex-col justify-between">
                    <div className="flex justify-between">
                      <div>
                        {data
                          .filter(
                            (filteritem) => filteritem._id === items.product_id
                          )
                          .map((mapitem) => (
                            <div className="flex flex-col gap-y-2">
                              <div className="text-lg font-extrabold">
                                {mapitem.title}
                              </div>
                              <div className="text-slate-400 text-sm font-bold">
                                {mapitem.generic.name}
                              </div>
                              <div className="text-lg font-bold">
                                $ {mapitem.price}
                              </div>
                            </div>
                          ))}
                      </div>
                      <div className="hover:scale-110" onClick={()=>handleDelete(items.product_id)}>
                        <TiTrash size={25} />
                      </div>
                    </div>
                    <div>
                      <div className="font-extrabold text-sm">
                        Delivery Estimation
                      </div>
                      <div className="text-pink-500 font-bold text-xs">
                        5 Working Days
                      </div>
                    </div>
                    {/* price and quantity div */}
                    <div className="border flex justify-between">
                      <div className="text-xs text-slate-500 flex items-center justify-center gap-x-6">
                        <div>Qty: {items.quantity}</div>{" "}
                        <div> Size: {items.size}</div>
                      </div>
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
                  <div>Items in Cart:</div>
                  <div className="text-pink-500 font-bold">{res.length}</div>
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
      ) : (
        <div className="text-3xl text-slate-400 font-bold text-center pt-10">
          No Items Available
        </div>
      )}
    </div>
  );
}
