"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/products/hoodie.jpg",
  "/images/products/hoodie.jpg",
  "/images/products/hoodie.jpg",
];

export default function ProductGallery() {
  const [active, setActive] = useState(images[0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-32"
    >
      {/* Main Image */}
      <div className="relative h-[520px] rounded-xl overflow-hidden bg-[#293957]/5 mb-6 group">
        <Image
          src={active}
          alt="Product"
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(img)}
            className={`relative w-20 h-20 rounded-lg overflow-hidden border ${
              active === img ? "border-[#ef852c]" : "border-transparent"
            }`}
          >
            <Image src={img} alt="Thumb" fill className="object-cover" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}
