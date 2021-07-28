import { Variants } from "framer-motion";

export const pageAnimationVariants: Variants = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.21,
    },
  },
  exit: {
    x: "100vw",
    transition: {
      duration: 0.21,
    },
  },
};
