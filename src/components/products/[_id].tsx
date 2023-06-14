
import React, { useState } from "react";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import { Image as IImage } from "sanity";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";


interface IProduct {
  _id: string;
  title: string;
  generic: { name: string };
  price: number;
  image: IImage[];
  category: { name: string };
}

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=='product']{
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
}`);
  return res;
};


export default async function page({
  params,
}: {
  params: { _id: string };
}) {
  const data: IProduct[] = await getProductData();
  console.log(data);

  return (
    <div>
      {/* individual item detail */}
      {/* {data.find((items) => params.category === items._id) && ( */}
      {/* <div> */}
      {data
        .filter((items) => items._id === params._id)
        .map((items) => (
          <div className="flex gap-x-8 pt-24">
            <div>
              {items.image.map((images, i) => (
                <div className="border border-red-400 w-24 h-[6.3rem] overflow-hidden mb-4">
                  <div>
                    <Image
                      className="max-h-[6.3rem] max-w-[6rem] object-cover"
                      src={urlForImage(images).url()}
                      alt=""
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
                src={urlForImage(items.image[0]).url()}
                alt=""
                width={1000}
                height={800}
              />
            </div>
            <div className="border">
              <div>{items.title}</div>
              <div>{items.generic.name}</div>
              <div>SELECT SIZE</div>
              <div className="flex gap-x-4">
                <button>Add to Cart</button>
                <p>{items.price}</p>
              </div>
            </div>
          </div>
        ))}
      {/* </div> */}
      {/* )} */}
    </div>
  );
}