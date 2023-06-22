import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "../../../drizzle/lib/drizzle";
import { sql } from "@vercel/postgres";
import {v4} from "uuid"
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  try {
    // await sql`CREATE TABLE IF NOT EXISTS Todos(id serial primary key, Task varchar(255))`;

    const resGET = await db.select().from(cartTable);
    return NextResponse.json(resGET);
  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json({
      message: (error as { message: string }).message,
    });
  }
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  console.log(req)
  const uid = v4();
  if (!cookies().get("user_id")) {
     cookies().set("user_id", uid)
   }


  try {
    const resPOST = await db
      .insert(cartTable)
      .values({
        user_id: cookies().get("user_id")?.value as string,
        product_id: req.product_id,
        size: req.size,
        quantity: req.quantity,
      })
      .returning();
    // return NextResponse.json({ message: "Data added successfully" });
    return NextResponse.json(resPOST);
  } catch (error) {
    return NextResponse.json({
      message: (error as { message: string }).message,
    });
  }
}
