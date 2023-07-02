import React from "react";
import SoloImage from "@/components/SoloImage";
import { IProduct, getProductData } from "@/components/cmsFetch";
import { urlForImage } from "../../../../sanity/lib/image";




export default async function page({ params }: { params: { id: string } }) {
  const data: IProduct[] = await getProductData();
  // console.log(data);
  const itemSelected = data.filter((items) => items._id === params.id);
  // const image = itemSelected[0].image.filter((items) => items);
  // const imageURL = image.map((items) => urlForImage(items).url());

  // console.log(imageURL)

  return <SoloImage data={itemSelected} />;
}
