import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import { IProduct, getProductData } from "@/app/page";





export default async function page({
  params,
}: {
  params: { category: string };
}) {
  const data: IProduct[] = await getProductData();
  // console.log(data);

  return (
    <div>
      {params.category !== "Allproducts" &&
        (data.filter((items) => items.category.name === params.category)
          .length ? (
          <div className="border border-red-500 flex flex-wrap justify-center md:justify-normal gap-[3.79rem] pt-20">
            {data
              .filter((items) => items.category.name === params.category)
              .map((items: IProduct, i) => (
                <Link
                  key={i}
                  href={`/soloproducts/${items._id}`}
                  className="border border-green-400"
                >
                  <div className="border w-60 h-64">
                    <Image
                      src={urlForImage(items.image[0]).url()}
                      alt="productimage"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div>{items.title}</div>
                  <div>{items.generic.name}</div>
                  <div>{items.price}</div>
                </Link>
              ))}
          </div>
        ) : (
          <div className="text-3xl text-slate-400 font-bold text-center pt-10">
            No Items Available
          </div>
        ))}

      {/* for all products */}
      {params.category === "Allproducts" && (
        <div className="border border-red-500 flex flex-wrap justify-center md:justify-normal gap-[3.79rem] pt-20">
          {data.map((items: IProduct, i) => (
            <Link
              key={i}
              href={`/soloproducts/${items._id}`}
              className="border border-green-400"
            >
              <div className="border w-60 h-64">
                <Image
                  src={urlForImage(items.image[0]).url()}
                  alt="productimage"
                  width={300}
                  height={300}
                />
              </div>
              <div>{items.title}</div>
              <div>{items.generic.name}</div>
              <div>{items.price}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
