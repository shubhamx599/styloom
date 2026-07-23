import { motion } from 'framer-motion';

// A sophisticated page transition: Dark overlay wipes up, then reveals the next page.
// This feels very editorial and premium.
export default function TransitionWrapper({ children }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="page-content"
      >
        {children}
      </motion.div>

      {/* The "Curtain" transition element */}
      <motion.div
        className="fixed inset-0 bg-[#060606] z-[999]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "top" }}
      />
    </>
  );
}
