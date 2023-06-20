import { title } from "process";
import React from "react";
import { TiTrash } from "react-icons/Ti";

export default function page({ params }: { params: { cartitems: string } }) {
  return (
    <div>
      <div>
        <h1 className="text-xl font-extrabold mt-12 mb-6">Shopping Cart</h1>
      </div>
      <div className="flex border border-red-400">
        <div className="flex-none border border-red-400 h-48 w-44 rounded-lg mr-5">
          image
        </div>
        <div className="border border-red-400 w-full p-2 flex flex-col justify-between">
          <div className="flex justify-between">
            <div>title</div>
            <div>
              <TiTrash size={25} />
            </div>
          </div>
          <div>generic.name</div>
          <div className="font-bold">Delivery Estimation</div>
          <div className="text-pink-500 font-bold">5 Working Days</div>
          <div>Price</div>
        </div>
        <div className="bg-gray-200 p-2 w-64 h-48 flex-none flex flex-col justify-between">
          <div className="border border-red-400">
            <h2 className="text-xl font-bold">Order Summary</h2>
          </div>
          <div className="border border-red-400 flex justify-between">
            <span>Quantity:</span>
            <span>Product</span>
          </div>
          <div className="border border-red-400 flex justify-between">
            <span>Sub Total:</span>
            <span>sum</span>
          </div>
          <div className="border bg-black text-white p-2 rounded-lg text-sm text-center">
            <button>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
