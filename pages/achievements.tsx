import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import { motion } from "framer-motion";
import { GetStaticProps, GetStaticPropsContext } from "next";
import React, { useEffect, useState } from "react";
import { AiOutlineTrophy } from "react-icons/ai";
import AchievementCard from "../components/achievements/AchievementCard";
import { pageAnimationVariants } from "../services/animations/common";
import achievementStyles from "../styles/pages/Achievements.module.css";
interface AchievementsInterface {
  achievements: Array<{ id: string; imageURL: string; title: string }>;
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const achievements = (await axios.get("/api/achievements")).data;
  return {
    props: {
      achievements,
    },
  };
};

const Achievements = ({ achievements }: AchievementsInterface) => {
  return (
    <motion.div
      variants={pageAnimationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={achievementStyles.achievements}
    >
      {achievements.map((achievement, index) => (
        <AchievementCard
          key={achievement.id}
          id={achievement.id}
          imageURL={achievement.imageURL}
          text={achievement.title}
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default Achievements;
