import React from "react";
import SoloImage from "@/components/SoloImage";
import { IProduct, getProductData } from "@/app/page";




export default async function page({ params }: { params: { id: string } }) {
  const data: IProduct[] = await getProductData();
  // console.log(data);
  const itemSelected = data.filter((items) => items._id === params.id);
  // const image = Array[0].image.filter((items) => items);
  // const imageURL = image.map((items) => urlForImage(items).url());

  return <SoloImage data={itemSelected} />;
}
