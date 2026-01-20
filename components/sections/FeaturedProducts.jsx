"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { productsByCategory } from "@/config/products.mock";

export default function FeaturedProducts() {
  // Flatten categories → single list
  const featuredProducts = Object.values(productsByCategory).flat().slice(0, 6);

  return (
    <section className="section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-light mb-4">Featured Merchandise</h2>
          <p className="text-muted max-w-xl mx-auto">
            A curated selection from our most popular collections.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card"
            >
              <div className="relative h-[200px] mb-4 overflow-hidden rounded-lg bg-[#293957]/5">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-sm mb-1">{product.name}</h3>
              <span className="text-sm font-medium">₹{product.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
