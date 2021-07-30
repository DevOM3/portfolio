import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import achievementCardStyles from "../../styles/components/achievements/AchievementCard.module.css";

type AchievementCardProps = {
  image: string;
  text: string;
  index: number;
};

const AchievementCard = ({ image, text, index }: AchievementCardProps) => {
  return (
    <motion.div className={achievementCardStyles.achievementCard}>
      <Image
        src={image}
        alt={image}
        layout="responsive"
        width={500}
        height={500}
        className={achievementCardStyles.achievementCardImage}
      />
      <p className={achievementCardStyles.text}>{text}</p>
    </motion.div>
  );
};

export default AchievementCard;
