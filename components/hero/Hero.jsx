"use client";
import { motion } from "framer-motion";
import FloatingPokerFX from "./FloatingPokerFX";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#293957" }}
    >
      {/* Floating poker elements */}
      <FloatingPokerFX />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.3em] text-xs text-[#9aa4bf] mb-6"
        >
          Poker Merchandise
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-light leading-tight text-white mb-8"
        >
          Play the game. <br />
          Wear the mindset.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-[#cfd6ea] max-w-xl mx-auto mb-12"
        >
          Premium poker-inspired merchandise for players who live the game
          beyond the table.
        </motion.p>

        <motion.button whileHover={{ scale: 1.05 }} className="btn-primary">
          Explore Collection
        </motion.button>
      </div>
    </section>
  );
}
