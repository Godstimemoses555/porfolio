"use client";
import React from "react";
import { motion } from "framer-motion";
import usePrefersReducedMotion from "./usePrefersReducedMotion";

const MotionImage = ({
  src,
  alt,
  containerClassName = "",
  imageClassName = "",
  float = true,
  priority = false,
}) => {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={`group relative overflow-hidden ${containerClassName}`}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, scale: 0.96, filter: "blur(14px)" }
      }
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { scale: 1.015 }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        draggable={false}
        className={`h-full w-full object-cover ${imageClassName}`}
        animate={
          reduceMotion || !float
            ? undefined
            : { y: [0, -6, 0], scale: [1.04, 1.065, 1.04] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="img-shine absolute inset-0 z-10" aria-hidden="true" />
    </motion.div>
  );
};

export default MotionImage;
