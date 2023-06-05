import React from "react";

export default function Promotions() {
  return (
    <>
      <div className="text-center mt-20">
        <p className="text-blue-600 text-xs font-semibold">PROMOTIONS</p>
        <h2 className="text-4xl font-bold py-6">Our Promotions Events</h2>
      </div>
      <div className="flex justify-between">
        <div className="basis-1/2 border p-6 space-y-6">
          <div className="border w-full h-48 bg-[#D6D6D8]"></div>
          <div className="border w-full h-48 bg-[#212121]"></div>
        </div>
        <div className="border basis-1/2 flex justify-between gap-x-6 p-6">
          <div className="border w-1/2 h-full bg-[#EFE1C7]"></div>
          <div className="border w-1/2 h-full bg-[#D7D7D9]"></div>
        </div>
      </div>
    </>
  );
}
