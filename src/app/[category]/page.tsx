import React from "react";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";

interface IProduct {
  _id: string;
  title: string;
  generic: { name: string };
  price: number;
  image: [];
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
  params: { category: string };
}) {
  const data: IProduct[] = await getProductData();
  console.log(data);

  return (
    <div>
      {params.category === "Male" && (
        <div className="border border-red-500 flex gap-x-16 pt-20">
          {data
            .filter((items) => items.category.name === "Male")
            .map((items: any) => (
              <Link href={items._id} className="border border-green-400">
                <div className="border w-60 h-64">image</div>
                <div>{items.title}</div>
                <div>{items.generic.name}</div>
                <div>{items.price}</div>
              </Link>
            ))}
        </div>
      )}
      {data.find((items) => params.category === items._id) && (
        <div>
          {data
            .filter((items) => items._id === params.category)
            .map((items) => (
              <div className="flex gap-x-8 pt-24">
                <div className="basis-1/6 border">side images</div>
                <div className="border basis-1/2">main image</div>
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
        </div>
      )}
    </div>
  );
}
