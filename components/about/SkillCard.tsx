import React from "react";
import skillCardStyles from "../../styles/components/about/SkillCard.module.css";

interface SkillCardProps {
  text: string;
  link: string;
  animationDelay: string;
}

const SkillCard = ({ text, link, animationDelay }: SkillCardProps) => {
  return (
    <a
      className={skillCardStyles.skillCard}
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{
        animationDelay,
      }}
    >
      <p>{text}</p>
    </a>
  );
};

export default SkillCard;
