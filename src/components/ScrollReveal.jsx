import { motion } from "framer-motion";

export const revealContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const revealItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const RevealList = ({ children }) => (
  <motion.div
    variants={revealContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

export const RevealItem = ({ children }) => (
  <motion.div variants={revealItem}>
    {children}
  </motion.div>
);
