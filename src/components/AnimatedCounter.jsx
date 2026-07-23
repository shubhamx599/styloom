import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

export default function AnimatedCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -40% 0px" });
  
  // Spring physics for the counter
  const spring = useSpring(0, {
    duration: 1700,
    bounce: 0,
  });
  
  // Update spring target when in view
  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  // Round the value for display
  const rounded = useTransform(spring, (latest) => Math.floor(latest));

  return (
    <h3 ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </h3>
  );
}
