import { motion } from "framer-motion";
import React from "react";
import achievementCardStyles from "../../styles/components/achievements/AchievementCard.module.css";

const AchievementCard = () => {
  return (
    <motion.div className={achievementCardStyles.achievementCard}>
      <img src="https://picsum.photos/200" alt="" />
    </motion.div>
  );
};

export default AchievementCard;
