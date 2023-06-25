
import { cartItems } from "@/drizzle/lib/drizzle";
import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

export default async function CartButton({
  res,
  cookiesuid,
}: {
  res: cartItems[];
  cookiesuid: string | undefined;
}) {

  return (
    <div>
      <Link href="/cart/cartitems">
        <div className="relative w-11 h-11 rounded-full bg-gray-200 justify-center items-center hidden lg:flex">
          <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 text-xs text-center place-items-center text-white">
            {res.filter((items) => items.user_id === cookiesuid).length}
          </div>
          <FiShoppingCart size={20} />
        </div>
      </Link>
    </div>
  );
}
