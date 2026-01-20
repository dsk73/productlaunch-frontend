"use client";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  if (!Array.isArray(products) || products.length === 0) {
    return null;
  }

  return (
    <div
      className="
        relative
        overflow-x-auto
        pb-16
        scrollbar-hide
      "
    >
      {/* INNER RAIL */}
      <div
        className="
          flex
          snap-x snap-mandatory
          pl-4
          pr-24
        "
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="
              flex-shrink-0
              snap-start
              mr-20
              w-[70vw]
              sm:w-[40vw]
              lg:w-[22vw]
              xl:w-[18vw]
              max-w-[300px]
            "
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
