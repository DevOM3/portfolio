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
    y: 21,
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

export const aboutLinkAnimationVariants: Variants = {
  initial: {
    y: "-100vh",
  },
  animate: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 4,
      duration: 7,
    },
  },
};

export const aboutTextAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 7,
    },
  },
};

export const aboutSkillCardAnimationVariants: Variants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

export const aboutBottomParallaxTextAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.7,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 4,
    },
  },
};
