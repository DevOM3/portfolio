import { motion } from "framer-motion";
import React from "react";
import { pageAnimationVariants } from "../services/animations/common";
import achievementStyles from "../styles/pages/Achievements.module.css";

const Achievements = () => {
  return (
    <motion.div
      variants={pageAnimationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={achievementStyles.achievements}
    ></motion.div>
  );
};

export default Achievements;
