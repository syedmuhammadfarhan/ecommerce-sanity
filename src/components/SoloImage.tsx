"use client";
import React, { useState } from "react";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { IProduct } from "@/app/page";

export default function SoloImage({ data }: { data: IProduct[] }) {
  console.log(data);
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
          <div className="border">
            <div>{data[0].title}</div>
            <div>{data[0].generic.name}</div>
            <div>SELECT SIZE</div>
            <div className="flex gap-x-4">
              <button>Add to Cart</button>
              <p>{data[0].price}</p>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
