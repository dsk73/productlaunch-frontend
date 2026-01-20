"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <Link
      href={`/shop/product/${product.slug}`}
      className="
        card
        h-full
        flex
        flex-col
        justify-between
        transition-transform
        hover:scale-[1.02]
      "
    >
      {/* IMAGE */}
      <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-5 bg-[#293957]/5">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-medium text-[#293957]">{product.name}</h3>

        <p className="text-sm text-muted">{product.category}</p>

        <p className="text-base font-semibold text-[#293957]">
          ₹{product.price}
        </p>
      </div>
    </Link>
  );
}
