import React from "react";

export default function page({ params }: { params: { cartitems: string } }) {
  return (
    <div>
      <div>
        <h1>Shopping Cart</h1>
      </div>
      <div className="flex justify-between border border-red-400">
        <div className="border border-red-400">image</div>
        <div className="border border-red-400">all text</div>
        <div className="bg-gray-200 p-2">
          <div className="border border-red-400">
            <h2>Order Summary</h2>
          </div>
          <div className="border border-red-400 flex justify-between">
            <span>Quantity</span>
            <span>Product</span>
          </div>
          <div className="border border-red-400 flex justify-between">
            <span>Sub Total</span>
            <span>sum</span>
          </div>
          <div className="border bg-black text-white p-2 rounded-lg text-sm">
            <button>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
