"use client";
import React, { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import usePrefersReducedMotion from "./usePrefersReducedMotion";

const AnimatedCounter = ({ value, suffix = "", duration = 1.6 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = usePrefersReducedMotion();
  const numericValue = Number(value);
  const isNumeric = !Number.isNaN(numericValue);
  const [display, setDisplay] = useState(isNumeric ? 0 : value);

  useEffect(() => {
    if (!inView || !isNumeric) return;

    const controls = animate(0, numericValue, {
      duration: reduceMotion ? 0.01 : duration,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, isNumeric, numericValue, duration, reduceMotion]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
