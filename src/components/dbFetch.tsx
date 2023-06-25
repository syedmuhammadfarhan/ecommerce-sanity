// export const BASE_URL =
//   process.env.NODE_ENV == "development"
//     ? "http://localhost:3000"
//     : "https://ecommerce-sanity-9272fb6ah-farhanpiaic-gmailcom.vercel.app";

// : "https://todo-postgres-blue.vercel.app";

export async function getData() {
  try {
    const res = await fetch(`http://localhost:3000/api/cart`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  } catch (error) {
    console.log((error as { message: string }).message);
  }
}
