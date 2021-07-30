import { motion } from "framer-motion";
import React from "react";
import AchievementCard from "../components/achievements/AchievementCard";
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
    >
      <AchievementCard />
      <AchievementCard />
      <AchievementCard />
      <AchievementCard />
      <AchievementCard />
      <AchievementCard />
      <AchievementCard />
      <AchievementCard />
      <AchievementCard />
      <AchievementCard />
      <AchievementCard />
    </motion.div>
  );
};

export default Achievements;
