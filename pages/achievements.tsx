import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import AchievementCard from "../components/achievements/AchievementCard";
import { pageAnimationVariants } from "../services/animations/common";
import achievementStyles from "../styles/pages/Achievements.module.css";
interface AchievementsInterface {
  id: string;
  imageURL: string;
  title: string;
}

const Achievements = () => {
  const [achievements, setAchievements] = useState<AchievementsInterface[]>([]);
  const [loading, setLoading] = useState(true);

  const getExistingAchievements = () => {
    axios.get("/api/achievements").then((response) => {
      setAchievements(response.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getExistingAchievements();
  }, []);

  return (
    <motion.div
      variants={pageAnimationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={achievementStyles.achievements}
      style={{ height: loading ? "100%" : "auto" }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        achievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            id={achievement.id}
            imageURL={achievement.imageURL}
            text={achievement.title}
          />
        ))
      )}
    </motion.div>
  );
};

export default Achievements;
