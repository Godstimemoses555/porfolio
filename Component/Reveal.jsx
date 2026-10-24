"use client";
import React from "react";
import { motion } from "framer-motion";
import usePrefersReducedMotion from "./usePrefersReducedMotion";

const Reveal = ({
  children,
  className = "",
  delay = 0,
  y = 24,
  once = true,
  amount = 0.2,
}) => {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      animate={reduceMotion ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once, amount }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
