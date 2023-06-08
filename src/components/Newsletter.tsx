'use client'
import React from "react";

const Newsletter = () => {

  const handleSubmit = (event:any) => {
    event.preventDefault();
    };

  

  return (
    <section className="pt-[10rem] pr-[8rem] flex flex-col justify-center items-center text-center relative z-10">
      <div className="text-[#f2f3f7] text-9xl font-bold absolute -z-10">Newsletter</div>
      <h1 className="text-4xl font-bold mb-[1rem]">Subscribe Our Newsletter</h1>
      <p className="mb-[2rem]">Get the latest information and promo offers directly</p>
      <form onSubmit={handleSubmit}>
        <input className="border  pl-2 pr-[120px]  max-w-7xl py-[10px] mr-4 text-sm" type="email" placeholder="Input email address"></input>
        <button className="bg-black px-4 py-[10px] text-white border-none " type="submit">Get Started</button>
      </form>
    </section>
  );
};

export default Newsletter;
