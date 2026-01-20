import HomeClient from "@/app/home-client";
import { getAllProducts } from "@/services/products";

export const metadata = {
  title: "Product Launch",
  description: "A premium product launch experience",
};

export default async function HomePage() {
  const res = await getAllProducts();
  const products = Array.isArray(res?.data) ? res.data : [];

  return <HomeClient products={products} />;
}
