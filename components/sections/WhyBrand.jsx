"use client";
import { motion } from "framer-motion";

export default function WhyBrand() {
  return (
    <section className="section surface">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        {[
          "Designed for poker players",
          "Premium quality materials",
          "Built for everyday wear",
        ].map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="card"
          >
            <h3 className="text-xl mb-3">{text}</h3>
            <p className="text-muted">
              Crafted to represent the mindset, discipline, and confidence of
              modern poker players.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
