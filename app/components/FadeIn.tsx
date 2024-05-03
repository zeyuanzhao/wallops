import { motion, Variants } from "framer-motion";
import React from "react";

const FadeIn = ({ amount, duration, children }: { amount: number; duration: number, children: any }) => {
  const variants1: Variants = {
    hide: {
      opacity: 0,
      y: -1 * amount,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
      },
    },
  };

  return <motion.div>
    {children}
  </motion.div>;
};

export default FadeIn;