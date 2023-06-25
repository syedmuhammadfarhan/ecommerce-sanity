import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function QuantityButton() {
  const [quantity, setQuantity] = useState(1);

  const quantityIncrement = () => {
    setQuantity(quantity + 1);
  };
  const quantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div>
      <div className="flex">
        <span
          className="border px-2 flex items-center hover:bg-black hover:text-white cursor-pointer"
          onClick={quantityDecrement}
        >
          <AiOutlineMinus />
        </span>
        <span className="border px-4 flex items-center">{quantity}</span>
        <span
          className="border px-2 flex items-center hover:bg-black hover:text-white cursor-pointer"
          onClick={quantityIncrement}
        >
          <AiOutlinePlus />
        </span>
      </div>
    </div>
  );
}
