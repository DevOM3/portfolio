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
      <AchievementCard
        image={"https://picsum.photos/200"}
        text={"This is testing text"}
        index={0}
      />
      <AchievementCard
        image={"https://picsum.photos/200"}
        text={"This is testing text"}
        index={0}
      />
      <AchievementCard
        image={"https://picsum.photos/200"}
        text={"This is testing text"}
        index={0}
      />
      <AchievementCard
        image={"https://picsum.photos/200"}
        text={"This is testing text"}
        index={0}
      />
      <AchievementCard
        image={"https://picsum.photos/200"}
        text={"This is testing text"}
        index={0}
      />
      <AchievementCard
        image={"https://picsum.photos/200"}
        text={"This is testing text"}
        index={0}
      />
      <AchievementCard
        image={"https://picsum.photos/200"}
        text={"This is testing text"}
        index={0}
      />
      <AchievementCard
        image={"https://picsum.photos/200"}
        text={"This is testing text"}
        index={0}
      />
      <AchievementCard
        image={"https://picsum.photos/200"}
        text={"This is testing text"}
        index={0}
      />
      <AchievementCard
        image={"https://picsum.photos/200"}
        text={"This is testing text"}
        index={0}
      />
      <AchievementCard
        image={"https://picsum.photos/200"}
        text={"This is testing text"}
        index={0}
      />
    </motion.div>
  );
};

export default Achievements;
