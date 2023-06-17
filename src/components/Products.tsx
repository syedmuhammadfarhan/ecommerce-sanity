import React from "react";
import { client } from "../../sanity/lib/client";
import { IProduct } from "@/app/products/[category]/page";
import SoloImage from "@/components/SoloImage";

export const getProductData = async () => {
  const res = await client.fetch(
    `*[_type=='product']{
    _id,
    title,
    generic -> {
      name,
    },
    price, 
    image,
    category -> {
      name,
    },
}`,
    {
      cache: "no-store",
    }
  );
  return res;
};

export default async function Products() {
  const data: IProduct[] = await getProductData();

  return (
    <div>
      <div className="text-center mt-28">
        <p className="text-blue-600 text-xs font-semibold">PRODUCTS</p>
        <h2 className="text-4xl font-bold py-6">Check What We Have</h2>
      </div>
      <div className="flex">

      {data.map((items) => (
        <div className="flex justify-evenly mt-10">
          <div className="border h-[29rem] w-[22rem] hover:scale-110 transition-all">
            <div className="border border-red-400 w-full h-5/6">
            </div>
              <div>
                <p>{items.title}</p>
                <p>{items.price}</p>
              </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
