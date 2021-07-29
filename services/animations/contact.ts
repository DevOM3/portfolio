import { Variants } from "framer-motion";

export const contactFormAnimationVariants: Variants = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
    transition: {
      delay: 1.1,
      duration: 1.2,
      type: "spring",
    },
  },
};

export const contactFormInputAnimationVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const contactFormSubmitButtonAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 150,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 50,
  },
};
