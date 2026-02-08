"use client";

import { motion } from "framer-motion";

export default function MotionLink({
  href,
  className,
  target,
  rel,
  children,
  ...rest
}) {
  const effectiveRel = rel ?? (target === "_blank" ? "noreferrer" : undefined);
  return (
    <motion.a
      href={href}
      className={className}
      target={target}
      rel={effectiveRel}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
