import React from "react";
import Image from "next/image";
import img from "../../public/featurebanner.webp";
import Link from "next/link";

const FeaturesBanner = () => {
  return (
    <section className=" mt-4 border-red-400 border">
      <div className="flex justify-end">
        <h1 className="text-4xl font-extrabold basis-1/3 border border-green-400">
          Unique and Authentic Vintage Designer Jewellery
        </h1>
      </div>

      <div className=" border border-red-400 flex justify-between">
        <div className="border-2 basis-1/2 border-blue-400 flex flex-col justify-evenly p-2 relative">
          <div className=" absolute text-[5.5rem] text-slate-100 font-extrabold px-10 -z-10">Different from others</div>
          <div className="flex border border-black">
            <div className="border p-4">
              <h3>Using Good Quality Materials</h3>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div className="border p-4">
              <h3>100% Handmade Products</h3>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="flex border border-black">
            <div className="border p-4">
              <h3>Modern Fashion Design</h3>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div className="border p-4">
              <h3>Discount for Bulk Orders</h3>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>

        <div className="flex basis-1/2 border border-green-400">
          <Image src={img} width={300} height={350} alt="img" />
          <div className="border border-black basis-1/2">
            <p>
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Link href={"/products"}>
              <button className="btn" type="button">
                See All Product
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBanner;
