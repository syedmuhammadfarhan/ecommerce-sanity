import React from "react";
import Image from "next/image";

export default function Promotions() {
  return (
    <>
      <div className="text-center mt-28">
        <p className="text-blue-600 text-xs font-semibold">PROMOTIONS</p>
        <h2 className="text-4xl font-bold py-6">Our Promotions Events</h2>
      </div>
      <div className="flex justify-between">
        <div className="basis-1/2 border p-6 space-y-6">
          {/* card 1 */}
          <div className="border w-full h-52 bg-[#D6D6D8] flex justify-evenly items-center overflow-hidden">
            <div className="text-[#212121] border max-w-fit">
              <h2 className="text-3xl font-bold">GET UP TO </h2>
              <h3 className="text-4xl font-extrabold">60%</h3>
              <p className="text-lg">For the summer season</p>
            </div>
            <div className="border">
              <Image
                src="/event1.png"
                alt="event1"
                width={280}
                height={280}
              ></Image>
            </div>
          </div>
          {/* card  */}
          <div className="border w-full h-52 bg-[#212121] flex justify-center items-center">
            <div className="text-white flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold tracking-wider">GET 30% Off</h2>
              <p className="text-sm">USE PROMO CODE</p>
              <div className="text-lg tracking-widest bg-[#474747] rounded-lg px-8 py-1">
                DINEWEEKENDSALE
              </div>
            </div>
          </div>
        </div>
        <div className="border basis-1/2 flex justify-between gap-x-6 p-6">
          {/* card 3 */}
          <div className="border w-1/2 h-full bg-[#EFE1C7]">
            <p>Flex Sweatshirt</p>
            <div className="flex gap-x-3">
              <del>$100.00</del>
              <p>$75.00</p>
            </div>
            <div className="border">
              <Image src="/event2.png" alt="event2" width={250} height={250} />
            </div>
          </div>
          {/* card 4 */}
          <div className="border w-1/2 h-full bg-[#D7D7D9]">
            <p>Flex Push Button Bomber</p>
            <div className="flex gap-x-3">
              <del>$225.00</del>
              <p>$190.00</p>
            </div>
            <div className="border">
              <Image src="/event3.png" alt="event3" width={250} height={250} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
