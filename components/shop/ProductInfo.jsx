"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useCartStore } from "@/store/cartStore";

export default function ProductInfo({ product }) {
  const addItem = useCartStore((s) => s.addItem);
  const [qty, setQty] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-light mb-4">{product.name}</h1>

      <p className="text-xl mb-6">₹{product.price}</p>

      <p className="text-muted mb-10">
        Premium poker merchandise designed for discipline and confidence beyond
        the table.
      </p>

      {/* Quantity */}
      <div className="flex items-center gap-4 mb-10">
        <span className="text-sm">Quantity</span>
        <div className="flex items-center border rounded-full px-4 py-2">
          <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
          <span className="px-4">{qty}</span>
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>
      </div>

      <button
        className="btn-primary w-full md:w-auto"
        onClick={() => addItem(product, qty)}
      >
        Add to Cart
      </button>
    </motion.div>
  );
}
