import React from "react";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-7xl bg-red-200 p-2 flex justify-between">
        {/* logo */}
        <div className="p-2">
          <Image src="/Logo.webp" alt="logo" height={1} width={150} />
        </div>
        {/* navbar items */}
        <div className="bg-green-200 flex justify-between items-center gap-x-20">
          <p>Female</p>
          <p>Male</p>
          <p>Kids</p>
          <p>All Products</p>
        </div>
        {/* search box */}
        <input type="text" />
        {/* cart */}
        <div className="w-11 h-11 rounded-full bg-gray-200 justify-center items-center flex">
          <FiShoppingCart size={20} />
        </div>
      </div>
    </div>
  );
}
