import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Products from "@/components/ProductScroll";
import Promotions from "@/components/Promotions";
import { IProduct, getProductData } from "../components/cmsFetch";
import FeaturesBanner from "@/components/FeatureBanner";
import Link from "next/link";


export default async function Home() {
  const data: IProduct[] = await getProductData();

  return (
    <div>
      <Hero />
      <Promotions />
      <Products data={data} />
      <FeaturesBanner/>
      <Newsletter />
     <Link href="success">SUCCESS</Link>
    </div>
  );
}
