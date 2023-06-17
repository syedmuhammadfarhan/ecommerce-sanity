import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Products from "@/components/ProductScroll";
import Promotions from "@/components/Promotions";
import { client } from "../../sanity/lib/client";
import { Image as IImage } from "sanity";


export interface IProduct {
  _id: string;
  title: string;
  generic: { name: string };
  price: number;
  image: IImage[];
  category: { name: string };
}

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

export default async function Home() {
  const data: IProduct[] = await getProductData();

  return (
    <div>
      {/* <Hero /> */}
      {/* <Promotions /> */}
      <Products data={data} />
      {/* <Newsletter /> */}
    </div>
  );
}
