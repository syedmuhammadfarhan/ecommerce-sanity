import Cart from "../../../components/Cart";
import { cookies } from "next/headers";
import React from "react";

export default function page({ params }: { params: { cartitems: string } }) {
  const cookiesuid = cookies().get("user_id")?.value;

  return (
    <div>
      {params.cartitems && (
        <div>
          <Cart cookiesuid={cookiesuid} />
        </div>
      )}
    </div>
  );
}
