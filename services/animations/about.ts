import { Variants } from "framer-motion";

export const aboutParallaxTextAnimationVariants: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.7,
      staggerChildren: 0.11,
    },
  },
};

export const aboutParallaxTextLetterAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 250,
      damping: 2.1,
    },
  },
};
