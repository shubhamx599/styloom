import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Reveal({ children, className = "", delay = 0, ...props }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -24px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
