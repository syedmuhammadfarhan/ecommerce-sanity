import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "../../../../sanity/lib/drizzle";
import { sql } from "@vercel/postgres";

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

  try {
    const resPOST = await db
      .insert(cartTable)
      .values({
        user_id: "",
        product_id: req.product_id,
        quantity: 1,
      })
      .returning();
    return NextResponse.json({ message: "Data added successfully" });
  } catch (error) {
    return NextResponse.json({
      message: (error as { message: string }).message,
    });
  }
}
