'use client'
import React from "react";

const Newsletter = () => {

  const handleSubmit = (event:any) => {
    event.preventDefault();
    };

  

  return (
    <section className="border pt-[10rem] pb-2 flex flex-col  justify-center items-center relative z-10">
      <div className="text-[#f2f3f7] text-9xl font-bold absolute -z-10">Newsletter</div>
      <h1 className="text-4xl font-bold mb-6">Subscribe Our Newsletter</h1>
      <p className="mb-6">Get the latest information and promo offers directly</p>
      <form onSubmit={handleSubmit}>
        <input className="border border-black pl-2 pr-2 w-80 max-w-7xl py-[10px] text-sm rounded-lg" type="email" placeholder="Enter email address"></input>
        <button className="bg-black px-4 py-2 text-white rounded-lg m-2" type="submit">Get Started</button>
      </form>
    </section>
  );
};

export default Newsletter;
