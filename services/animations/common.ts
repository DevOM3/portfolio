import { Variants } from "framer-motion";

export const pageAnimationVariants: Variants = {
  initial: {
    x: "-50vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    x: "50vw",
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};
