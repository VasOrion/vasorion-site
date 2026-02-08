"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeIn, viewport, transition } from "./motion/variants";

const variantMap = { fadeUp, fadeIn };

export default function Reveal({ children, delay = 0, variant }) {
  const v =
    typeof variant === "string" ? variantMap[variant] ?? fadeUp : variant ?? fadeUp;
  const initial = typeof v === "object" && v.hidden ? v.hidden : { opacity: 0, y: 24 };
  const animate = typeof v === "object" && v.visible ? v.visible : { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={viewport}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  );
}
