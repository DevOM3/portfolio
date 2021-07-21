import React from "react";
import skillCardStyles from "../../styles/components/about/SkillCard.module.css";

interface SkillCardProps {
  text: string;
  link: string;
}

const SkillCard = ({ text, link }: SkillCardProps) => {
  return (
    <a
      className={skillCardStyles.skillCard}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <p>{text}</p>
    </a>
  );
};

export default SkillCard;
