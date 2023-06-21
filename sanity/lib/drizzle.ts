import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";


// Types
import { InferModel } from "drizzle-orm";

export const cartTable = pgTable("cart", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id", { length: 255 }).notNull(),
    product_id: varchar("product_id", { length: 255 }).notNull(),
  quantity: integer("quantity").notNull()
});

// export type Todo = InferModel<typeof cartTable>;
// export type NewTodo = InferModel<typeof cartTable, "insert">;

export const db = drizzle(sql);
