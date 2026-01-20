"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LifestyleStory() {
  return (
    <section className="section surface">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-light mb-6">Poker is a lifestyle</h2>
          <p className="text-muted text-lg leading-relaxed">
            From late-night grind sessions to early-morning reviews, poker
            shapes how you think, act, and carry yourself. Our merchandise is
            designed to represent that discipline beyond the table.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[420px] rounded-xl overflow-hidden"
        >
          <Image
            src="/images/lifestyle/poker-life.jpg"
            alt="Poker lifestyle"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
