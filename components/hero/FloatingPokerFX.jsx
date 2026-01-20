"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  { src: "/images/poker/card1.png", x: -200, y: -120, size: 80 },
  { src: "/images/poker/chip.png", x: 220, y: -60, size: 70 },
  { src: "/images/poker/card2.png", x: -260, y: 160, size: 90 },
  { src: "/images/poker/heart.png", x: 260, y: 140, size: 50 },
];

export default function FloatingPokerFX() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2"
          style={{
            transform: `translate(${item.x}px, ${item.y}px)`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={item.src}
            alt="Poker element"
            width={item.size}
            height={item.size}
            className="opacity-60"
          />
        </motion.div>
      ))}
    </div>
  );
}
