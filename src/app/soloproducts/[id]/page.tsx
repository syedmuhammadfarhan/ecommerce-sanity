import React from "react";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
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

export default async function page({ params }: { params: { id: string } }) {
  const data: IProduct[] = await getProductData();
  // console.log(data);
  const Array = data.filter((items) => items._id === params.id);
  // const image = Array[0].image.filter((items) => items);
  // const imageURL = image.map((items) => urlForImage(items).url());

  return <SoloImage data={Array} />;
}
