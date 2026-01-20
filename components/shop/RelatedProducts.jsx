"use client";
import { allProducts } from "@/config/products.mock";
import ProductCard from "./ProductCard";

export default function RelatedProducts({ currentSlug }) {
  const related = allProducts.filter((p) => p.slug !== currentSlug).slice(0, 5);

  return (
    <section className="mt-32">
      <h2 className="text-3xl font-light mb-10">You may also like</h2>

      <div className="flex gap-8 overflow-x-auto pb-6">
        {related.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-[260px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
