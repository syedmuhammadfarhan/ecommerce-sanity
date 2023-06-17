import React from "react";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";
import { IProduct } from "@/app/page";

export default async function ProductScroll({ data }: { data: IProduct[] }) {
  return (
    <div>
      <div className="text-center mt-28">
        <p className="text-blue-600 text-xs font-semibold">PRODUCTS</p>
        <h2 className="text-4xl font-bold py-6">Check What We Have</h2>
      </div>
      <div className="flex">
        <div className="border flex items-center max-w-[70rem] w-full h-[30rem] mx-auto mt-4 mb-8 overflow-x-scroll">
          {data.map((items, i) => (
            <Link key={i} href={`/soloproducts/${items._id}`}>
              <div className="border mx-7 h-[26rem] w-[20rem] hover:scale-110 transition-transform ease-in-out duration-500 rounded-lg overflow-hidden flex flex-col justify-between">
                <div className="border border-red-400 w-full h-6/7">
                  <Image
                    src={urlForImage(items.image[0]).url()}
                    alt="productimage"
                    width={350}
                    height={300}
                  />
                </div>
                <div className="border border-green-400 p-2">
                  <p className="text-lg font-bold">{items.title}</p>
                  <p className="font-bold text-slate-500">{items.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
