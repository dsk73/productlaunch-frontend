"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function StickyProduct() {
  const { scrollYProgress } = useScroll();

  const rotate = useTransform(scrollYProgress, [0.15, 0.6], [0, 140]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.15, 0.6, 0.7],
    [0, 0, 1, 1, 0]
  );

  return (
    <motion.div
      style={{ rotate, opacity }}
      className="
        fixed top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        z-30 pointer-events-none
        w-[200px] sm:w-[260px] md:w-[320px]
      "
    >
      <Image
        src="/images/bottle.png"
        alt="Featured product"
        width={400}
        height={600}
        className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
        priority
      />
    </motion.div>
  );
}
