import { IProduct, getProductData } from "@/components/cmsFetch";
import { cartItems } from "@/lib/drizzle";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
});

export async function POST(request: NextRequest) {
    const cookiesuid = cookies().get("user_id")?.value;
    const data: IProduct[] = await getProductData(); 
    const res: cartItems[] | any = await request.json();
    const resFilter = res.filter((items: cartItems) => items.user_id === cookiesuid)


//       const filterCMS = resFilter.map((resitems:any) => data.filter((dataitems) => dataitems._id === resitems.product_id))
  
//   const singlefilterCMS = filterCMS.map((items:any) => items[0])

//   console.log(`singlefilterCMS price`,singlefilterCMS.map((items:any) => items.price))
    
    try {
    //   length will also be according to the cookies user_id
    if (res.length > 0) {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "required",
        shipping_options: [
          { shipping_rate: "shr_1NPDVAKJ6sescAY63TQHAP9r" },
          { shipping_rate: "shr_1NPC6FKJ6sescAY65vaYpl2Y" },
        ],
        invoice_creation: {
          enabled: true,
        },
        line_items: resFilter.map((mapitems: cartItems) => 
        {
          return {
              price_data:
                {
                    currency: "pkr",
                    product_data:
                    {
                      name: mapitems.title, // needs to be fixed
                      images: [mapitems.product_image],
                    }, 
                    unit_amount:  mapitems.price * 100,         
      
                },
            quantity: mapitems.quantity,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 10,
            },
          };
        }),
        phone_number_collection: {
          enabled: true,
        },
        success_url: `${request.headers.get("origin")}/success`,
        cancel_url: `${request.headers.get("origin")}/?canceled=true`,
      });
      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ message: "No Data Found" });
    }
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(err.message);
  }
}