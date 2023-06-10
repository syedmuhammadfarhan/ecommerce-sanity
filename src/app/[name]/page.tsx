import React from "react";
import { client } from "../../../sanity/lib/client";

interface IProduct {
  _id: string;
  title: string;
  generic: { name: string };
  price: number;
  image: [];
  category: {name: string};
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

export default async function page({ params }: { params: { name: string } }) {
  const data: IProduct[] = await getProductData();
  console.log(data);

  return (
    <div>
      {params.name === "Male" && (
        <div className="border border-red-500 flex gap-x-16 pt-20">
          {data.filter((items)=> items.category.name==='Male').map((items: any) => (
            <div>
              <div className="border w-60 h-64">image</div>
              <div>{items.title}</div>
              <div>{items.generic.name}</div>
              <div>{items.price}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
